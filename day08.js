var fs = require("fs");
var db = fs.readFileSync("task_08DB.txt", "utf-8");
var row = db.split("\r\n");

var sum1=0;
var sum2=0;

for (var i = 0; i < row.length-1; i++) {
  sum1=sum1+row[i].length;
  sum2=sum2+row[i].replace(/\\\\|\\"|\\x[a-f0-9]{2}/g,"@").length-2;
}
console.log(sum1-sum2);

var line=db.split("\n").join("");
console.log(JSON.stringify(line).length-sum1-2);
