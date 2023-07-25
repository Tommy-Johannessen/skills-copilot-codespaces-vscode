// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const port = 3000;

// Read and parse comments.json
const data = fs.readFileSync('./data/comments.json', 'utf8');
const comments = JSON.parse(data);

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set static directory
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Get
// Render index.ejs
app.get('/', (req, res) => {
  res.render('index', { comments: comments });
});

// Post
app.post('/comments', (req, res) => {
  // Get data from body
  const comment = req.body.comment;
  const name = req.body.name;
  const email = req.body.email;
  const date = new Date().toISOString().slice(0, 10);

  // Create new comment
  const newComment = {
    comment: comment,
    name: name,
    email: email,
    date: date,
  };

  // Add new comment to comments.json
  comments.push(newComment);
  fs.writeFileSync('./data/comments.json', JSON.stringify(comments));

  // Redirect to home page
  res.redirect('/');
});

// Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});