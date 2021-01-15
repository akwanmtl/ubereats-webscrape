// Set up Express
const express = require("express");
const app = express();

// Port 
const PORT = process.env.PORT || 8080;

// Look at public directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Set Handlebars.
// const exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// Import routes

require("./routes/routes.js")(app);

// Listen to port
app.listen(PORT, () => console.log(`App now listening at http://localhost:${PORT}/`));
