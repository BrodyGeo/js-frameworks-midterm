// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const metasRoutes = require('./routes/metas');

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

// Your route file for your resource
app.use(`/metas`, metasRoutes);

// Exporting the changes
module.exports = app;