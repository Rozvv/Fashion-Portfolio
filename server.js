const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Contact form endpoint
app.post('/contact', (req, res) => {
  const { name, email, type, message } = req.body;
  console.log('New contact form submission:');
  console.log(`  Name: ${name}`);
  console.log(`  Email: ${email}`);
  console.log(`  Type: ${type}`);
  console.log(`  Message: ${message}`);
  res.json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
