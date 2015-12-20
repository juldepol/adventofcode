var task = "1321131112";

function lookAndSay(n) {
  var array = task.split("");
  for (var j = 0; j < n; j++) {
    var result = "";
    var num = 1;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
        num++;
      } else {
        result = result + num + array[i];
        num = 1;
      }
    }
    array = result.split("");
  }
  return array.length;
}

console.log("Part 1: " + lookAndSay(40));
console.log("Part 2: " + lookAndSay(50));
