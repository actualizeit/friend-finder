// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friends = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // req.body is available since we're using the body parsing middleware
    friends.push(req.body);
    res.json(true);
    }
  )

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = 1;
    res.json({ ok: true });
  });
};
