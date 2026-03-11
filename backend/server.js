const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Endpoint for Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Simulate contact message processing
  console.log(`New Contact Form Submission:
  Name: ${name}
  Email: ${email}
  Message: ${message}
  `);

  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Vazraka backend running on http://localhost:${PORT}`);
});
