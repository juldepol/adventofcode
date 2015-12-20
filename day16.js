var fs = require('fs');
var sue = fs.readFileSync('day16DB.txt', 'utf-8').split("\n");

var SUE = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1
};

function checkQuantityFirst(name, quantity) {
  switch (name) {
    case "children:":
      {if (SUE.children === quantity) {return true;}
       else {return false;}
       break;}
    case "cats:":
      {if (SUE.cats === quantity) {return true;}
       else {return false;}
       break;}
    case "samoyeds:":
      {if (SUE.samoyeds === quantity) {return true;}
       else {return false;}
       break;}
    case "pomeranians:":
      {if (SUE.pomeranians === quantity) {return true;}
       else {return false;}
       break;}
    case "akitas:":
      {if (SUE.akitas === quantity) {return true;}
       else {return false;}
       break;}
    case "vizslas:":
      {if (SUE.vizslas === quantity) {return true;}
       else {return false;}
       break;}
    case "goldfish:":
      {if (SUE.goldfish === quantity) {return true;}
       else {return false;}
       break;}
    case "trees:":
      {if (SUE.trees === quantity) {return true;}
       else {return false;}
       break;}
    case "cars:":
      {if (SUE.cars === quantity) {return true;}
       else {return false;}
       break;}
    case "perfumes:":
      {if (SUE.perfumes === quantity) {return true;}
       else {return false;}
       break;}
    default:{return false;}
  }
}

function checkQuantitySecond(name, quantity) {
  switch (name) {
    case "children:":
      {if (SUE.children === quantity) {return true;}
       else {return false;}
       break;}
    case "cats:":
      {if (SUE.cats < quantity) {return true;}
       else {return false;}
       break;}
    case "samoyeds:":
      {if (SUE.samoyeds === quantity) {return true;}
       else {return false;}
       break;}
    case "pomeranians:":
      {if (SUE.pomeranians > quantity) {return true;}
       else {return false;}
       break;}
    case "akitas:":
      {if (SUE.akitas === quantity) {return true;}
       else {return false;}
       break;}
    case "vizslas:":
      {if (SUE.vizslas === quantity) {return true;}
       else {return false;}
       break;}
    case "goldfish:":
      {if (SUE.goldfish > quantity) {return true;}
       else {return false;}
       break;}
    case "trees:":
      {if (SUE.trees < quantity) {return true;}
       else {return false;}
       break;}
    case "cars:":
      {if (SUE.cars === quantity) {return true;}
       else {return false;}
       break;}
    case "perfumes:":
      {if (SUE.perfumes === quantity) {return true;}
       else {return false;}
       break;}
    default:{return false;}
  }
}

n = sue.length-1;
var i = 0;
while (i <= n) {
  var array = sue[i].split(" ");
  var firstName = array[2];
  var secondName = array[4];
  var thirdName = array[6];
  var firstQuantity = +array[3].replace(",","");
  var secondQuantity = +array[5].replace(",","");
  var thirdQuantity = +array[7];
  if (checkQuantityFirst(firstName,firstQuantity)&&checkQuantityFirst(secondName,secondQuantity)&&checkQuantityFirst(thirdName,thirdQuantity)) {
    i++;
    break;
  }
  else {
    i++;
  }
}
console.log("Part 1: " + i);

var j = 0;
while (j <= n) {
  var array = sue[j].split(" ");
  var firstName = array[2];
  var secondName = array[4];
  var thirdName = array[6];
  var firstQuantity = +array[3].replace(",","");
  var secondQuantity = +array[5].replace(",","");
  var thirdQuantity = +array[7];
  if (checkQuantitySecond(firstName,firstQuantity)&&checkQuantitySecond(secondName,secondQuantity)&&checkQuantitySecond(thirdName,thirdQuantity)) {
    j++;
    break;
  }
  else {
    j++;
  }
}
console.log("Part 2: " + j);
