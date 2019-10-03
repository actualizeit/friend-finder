// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

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
        console.log(totalDiff)
    }
    friends.push(req.body);
    return bestMatch
}


// ===============================================================================
// ROUTING
// ===============================================================================

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

// var myMan = {
//     name: "MyMan",
//     photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//       2,
//       3,
//       1,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       3
//     ]
//   }

//   bestMatch(myMan)