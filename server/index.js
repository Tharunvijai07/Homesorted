import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Client } = pg;
const app = express();

app.use(cors());
app.use(express.json());

if (!process.env.DATABASE_URL) {
  console.error('Missing DATABASE_URL environment variable.');
  process.exit(1);
}

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

await client.connect();

app.post('/api/pre-register', async (req, res) => {
  const { name, phone, email, state } = req.body;

  if (!name || !phone || !email || !state) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }

  try {
    await client.query(
      'INSERT INTO pre_registration (name, phone, email, state) VALUES ($1, $2, $3, $4)',
      [name.trim(), phone.trim(), email.trim(), state.trim()]
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Database insert error:', error);
    res.status(500).json({ success: false, error: 'Unable to save registration.' });
  }
});

// List recent pre-registrations (for local verification)
app.get('/api/pre-registrations', async (req, res) => {
  try {
    const result = await client.query('SELECT id, created_at, name, phone, email, state FROM pre_registration ORDER BY created_at DESC LIMIT 20');
    res.json({ success: true, rows: result.rows });
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ success: false, error: 'Unable to fetch registrations.' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
