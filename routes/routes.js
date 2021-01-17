const scrape = require("../controllers/scrape.js");
var path = require("path");
module.exports = (app) => {

    app.post("/api/scrape", (req,res)=>{
      scrape(req.body).then(data =>{
        console.log(data)
        res.json(data)
      })
    })

    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/restaurants", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/restaurants.html"))
    });
};