
var friends = require("../data/friends.js");

function bestMatch(req){
    var myResp = req.body.scores
    var friendOptions = friends
    var bestMatchScore = 100
    var bestMatch = ""
    for(i=0; i < friendOptions.length; i++){
        var matchResp = friendOptions[i].scores
        var totalDiff = 0
        for(x=0; x < matchResp.length; x++){
            var diff = Math.abs(matchResp[x] - myResp[x])
            totalDiff += diff
        }
        if(totalDiff < bestMatchScore){
            bestMatchScore = totalDiff
            friendOptions[i].matchScore = bestMatchScore
            bestMatch = friendOptions[i]
        }
    }
    friends.push(req.body);
    return bestMatch
}

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

  app.post("/api/friends", function(req, res) {
    res.json(bestMatch(req));
    friends.push(req.body);
    }
  )

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = 1;
    res.json({ ok: true });
  });
};