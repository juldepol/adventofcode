var fs = require('fs');
var db=fs.readFileSync('task_05DB.txt','utf-8');

var name=db.split("\n");
var nice1=0;
var nice2=0;
//It contains at least three vowels
function firstRequirement(subject) {
    if (subject.search(/[aeiou].*[aeiou].*[aeiou]/) > -1){
      return true;//nice
    } else {
      return false;
    }
}
//It contains at least one letter that appears twice in a row
function secondRequirement(subject) {
  if (subject.search(/(\w)(\1)/) > -1){
    return true;//nice
  } else {
    return false;
  }
}
//It does not contain the strings ab, cd, pq, or xy
function thirdRequirement(subject){
  if (subject.search(/ab|cd|pq|xy/)===-1){
    return true;//nice
  } else {
    return false;
  }
}
//It contains a pair of any two letters that appears at least twice in the string without overlapping
function fourthRequirement(subject){
  if (subject.search(/(\w\w).*\1/)===-1){
    return false;
  } else {
    return true;//nice
  }
}
//It contains at least one letter which repeats with exactly one letter between them
function fifthRequirement(subject){
  if (subject.search(/(\w)\w\1/)===-1){
    return false;
  } else {
    return true;//nice
  }
}

for (var i = 0; i < name.length-1; i++) {
  if (firstRequirement(name[i]) && secondRequirement(name[i]) && thirdRequirement(name[i])) {
    nice1++;
  }
}

for (var i = 0; i < name.length-1; i++) {
  if (fourthRequirement(name[i]) && fifthRequirement(name[i])) {
    nice2++;
  }
}

console.log("1 Part \n Nice: "+nice1);
console.log("2 Part \n Nice: "+nice2);
