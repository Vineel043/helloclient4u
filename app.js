const express = require('express');
const path = require('path');

const app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // <<<======= to view Template
// Set public folder
app.use(express.static(path.join(__dirname, 'public')));
// Set routes
const pages = require('./routes/pages.js');
app.use('/', pages);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));