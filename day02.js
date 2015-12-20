var fs = require('fs');
var db=fs.readFileSync('day02DB.txt','utf-8');

var row=db.split("\n");
var paper=0;
var ribbon=0;

for (var i = 0; i < row.length-1; i++) {
  var col=row[i].split("x");
  for (var j = 0; j < col.length; j++) {
    col[j]=+col[j];
  }

  var slack=(col[0]*col[1]*col[2])/Math.max(col[0],col[1],col[2]);
  paper=paper+2*col[0]*col[1]+2*col[1]*col[2]+2*col[0]*col[2]+slack;
  ribbon=ribbon+2*col[0]+2*col[1]+2*col[2]-2*Math.max(col[0],col[1],col[2])+col[0]*col[1]*col[2];
}

console.log("Paper: "+paper);
console.log("Ribbon: "+ribbon);
