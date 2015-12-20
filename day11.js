function nextChar(c) {
  return String.fromCharCode(97 + (c.charCodeAt(0) - 97 + 1) % 26);
}

function nextLine(line) {
  var len = line.length;
  for (var i = len - 1; i >= 0; i--) {
    line[i] = nextChar(line[i]);
    if (line[i] === "a") {
      continue;
    } else {
      return line;
    }
  }
}
//???
function nextLineСrutch(line) {
  var l = line.length;
  var t = nextLine(line);
  if (t !== undefined) {
    return t.join("");
  } else {
    t = ["a"];
    for (var i = 0; i < l - 1; i++) {
      t.push("a");
    }
    return t.join("");
  }
}

function firstRequirement(subject) {
  var array = subject.split("");
  for (var i = 0; i < array.length; i++) {
    if (array[i + 2] !== undefined) {
      if (array[i].charCodeAt(0) === (array[i + 1].charCodeAt(0) - 1) && array[i + 1].charCodeAt(0) === (array[i + 2].charCodeAt(0) - 1)) {
        return true; //nice
      }
    } else {
      break;
    }
  }
}

function secondRequirement(subject) {
  if (subject.search(/i|o|l/) === -1) {
    return true; //nice
  } else {
    return false;
  }
}

function thirdRequirement(subject) {
  var thing = subject.match(/(\w)(\1)/g);
  if (thing !== null) {
    if (thing.length >= 2) {
      return true; //nice
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function passGenerator(oldPassword) {
  var newPassword = nextLineСrutch(oldPassword.split(""));
  var flag = true;
  while (flag) {
    if (firstRequirement(newPassword) && secondRequirement(newPassword) && thirdRequirement(newPassword)) {
      flag = false;
    } else {
      newPassword = nextLineСrutch(newPassword.split(""));
    }
  }
  return newPassword;
}

//Part 1: cqjxjnds -> cqjxxyzz
//Part 2: cqjxxyzz -> cqkaabcc
var old = "cqjxxyzz";
console.log(passGenerator(old));
