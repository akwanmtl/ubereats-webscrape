'use strict';
var path = require("path");
(function(){
    const express = require("express");
    const app = express();
    
    // Port 
    const PORT = 8080;
    
    // Look at public directory.
    app.use(express.static(path.join(__dirname, "/public/")));
    
    // Parse request body as JSON
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
  
    require("./routes/routes.js")(app);
    
    // Listen to port
    app.listen(PORT, () => console.log(`App now listening at http://localhost:${PORT}/`));

    module.exports = app;
}());

