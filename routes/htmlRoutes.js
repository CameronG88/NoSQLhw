const path = require("path");
const db = require("../models");

// - Create all the routes to display pages (View)
//     - You will need html routes to display the following pages:
//         - index.html ( "/" )
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //         - exercise.html ( "/exercise" )
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    //         - stats.html ( "/stats" )
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};