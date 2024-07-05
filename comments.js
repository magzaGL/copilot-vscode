// Create web server
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a GET route that returns a JSON response
app.get('/comments', (req, res) => {
  res.json({ comments: [
    'This is a comment!',
    'This is another comment!'
  ] });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});