const express = require('express');
const path = require('path');
const app = express();

// Serve static files from Vue build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Contact form endpoint
app.post('/contact', (req, res) => {
  // Handle contact form submission (e.g., send an email)
});

// Fallback to serve the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

console.log('Serving static files from:', path.join(__dirname, '../../client/dist'));

module.exports = app;