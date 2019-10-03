// ===============================================================================
// DATA
// ===============================================================================

var friends = [
    {
      name: "Ahmed",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    }
  ];

  var input =     {
    name: "MyMan",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
      2,
      3,
      1,
      4,
      5,
      1,
      2,
      5,
      4,
      3
    ]
  }

function bestMatch(input){
    var myResp = input.scores
    var bestMatchScore = 0
    var bestMatchName = ""
    for(i=0; i < friends.length; i++){
        var matchResp = friends[i].scores
        var totalDiff = 0
        for(x=0; x < matchResp.length; x++){
            var diff = Math.abs(matchResp[x] - myResp[x])
            totalDiff += diff
        }
        if(totalDiff > bestMatchScore){
            bestMatchScore = totalDiff
            bestMatchName = friends[i].name
        }
        console.log(totalDiff)
    }
    console.log(bestMatchScore + " " + bestMatchName)
}

bestMatch(input)

  module.exports = friends;