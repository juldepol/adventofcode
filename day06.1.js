var fs = require("fs");
var db = fs.readFileSync("task_06DB.txt", "utf-8");
var col, From, To;
var row = db.split("\n");
var size=1000;

var lights = new Array(size);
for (var i = 0; i < size; i++) {
  lights[i] = new Array(size);
}

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    lights[i][j] = false;
  }
}

for (var i = 0; i < row.length - 1; i++) {
  col = row[i].split(" ");
  if (col.length==4){
    From = col[1].split(",");
    To = col[3].split(",");
    for (var j = 0; j < 2; j++) {
      From[j] = +From[j];
      To[j] = +To[j];
    }
    for (var x = From[0]; x <= To[0]; x++) {
      for (var y = From[1]; y <= To[1]; y++) {
        if(lights[x][y] === false) {lights[x][y] = true;}
        else if (lights[x][y] === true) {lights[x][y] = false;}
      }
    }
  }else{
    From = col[2].split(",");
    To = col[4].split(",");
    for (var j = 0; j < 2; j++) {
      From[j] = +From[j];
      To[j] = +To[j];
    }
    for (var x = From[0]; x <= To[0]; x++) {
      for (var y = From[1]; y <= To[1]; y++) {
        switch (col[1]) {
          case "on":{lights[x][y] = true;break;}
          case "off":{lights[x][y] = false;break;}
          default:{console.log("Error!");}
        }
      }
    }
  }
}

var on=0;
for (var n = 0; n < size; n++) {
  for (var m = 0; m < size; m++) {
    if (lights[n][m] === true){on++;}
  }
}
console.log("Lights on: "+on);
