var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};



// List everyone and for each of them, list the names of who they follow and who follows them
// Identify who follows the most people
function mostFollows(data){
  var follows = 0;
  var max = 0;
  for (people in data){
    var followingCount = data[people].follows.length;
    // console.log(followingCount);
    if (followingCount > max){
      max = followingCount;
      follows = data[people].name
    }
  }
  // console.log('max at', follows);
  return follows;
}
// Identify who has the most followers
function mostFollowers(data){
  var most = [];
  var totalFollows = {};
  var max = 0;
  for (var people in data){
    var followList = data[people].follows;
    for (var i in followList){
      if (totalFollows[followList[i]]){
        totalFollows[followList[i]] += 1;
      } else {
      totalFollows[followList[i]] = 1;
      }
    }
  }
  console.log(totalFollows);
  for (var keys in totalFollows){
    var value = totalFollows[keys];
    if (value > max){
      // most.push(key);
      max = value;
    }
  }
  for (key in totalFollows){
    maxValue = totalFollows[key]
    if (maxValue == max){
      most.push(key, maxValue);
    }
  }
  return most;
}
// Identify who has the most followers over 30
function mostFollowersOver30(data){

}
// Identify who follows the most people over 30
function mostFollowsOver30(data){

}
// List those who follow someone that doesn't follow them back
function noFollowBack(data){

}
// List everyone and their reach (sum of # of followers and # of followers of followers)
function listReach(data){

}

mostFollows(data);
console.log(mostFollowers(data));