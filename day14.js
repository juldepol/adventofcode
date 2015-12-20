var fs = require("fs");
var db = fs.readFileSync("task_14DB.txt", "utf-8");
var row = db.split("\n");

var TIME = 2503;

function Reindeer(deerName, flightSpeed, flightTime, restTime) {
  this.deerName = deerName;
  this.flightSpeed = parseInt(flightSpeed);
  this.flightTime = parseInt(flightTime);
  this.restTime = parseInt(restTime);
  this.calcDistance = function() {
    var r = TIME % (this.flightTime + this.restTime);
    var n = (TIME - r) / (this.flightTime + this.restTime);
    var add;
    if (r >= this.flightTime) {
      add = this.flightSpeed * this.flightTime;
    } else {
      add = r * this.flightSpeed;
    }
    var dist = this.flightSpeed * this.flightTime * n + add;
    console.log("Distance on 2503 sec: " + dist + " km.");
  };
}

var competitors = new Array();
var points = new Array();
var d = new Array();
for (var i = 0; i < row.length - 1; i++) {
  var col = row[i].split(" ");
  competitors[i] = new Reindeer(col[0], col[3], col[6], col[13]);
  points[i]=0;
  d[i]=0;
}

var t = 0;

while (t <= TIME) {
  for (var i = 0; i < competitors.length; i++) {
    if (t % (competitors[i].flightTime + competitors[i].restTime) < competitors[i].flightTime) {
      d[i] = d[i] + competitors[i].flightSpeed;
    }
  }
  var indexOfMax = d.indexOf(Math.max.apply(null, d));
  points[indexOfMax]++;
  t++;
}

for (var i = 0; i < row.length - 1; i++) {
  console.log("Name: " + competitors[i].deerName);
  competitors[i].calcDistance();
  console.log("Points: " + points[i] + "\n");
}
