var fs = require("fs");
var db = fs.readFileSync("day06DB.txt", "utf-8");
var col, From, To;
var row = db.split("\n");
var size=1000;

var brightness = new Array(size);
for (var i = 0; i < size; i++) {
  brightness[i] = new Array(size);
}

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    brightness[i][j] = 0;
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
        brightness[x][y] = brightness[x][y]+2;
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
          case "on":{brightness[x][y] = brightness[x][y]+1;break;}
          case "off":{
            brightness[x][y] = brightness[x][y]-1;
            if(brightness[x][y]<0){brightness[x][y]=0;}
            break;}
          default:{console.log("Error!");}
        }
      }
    }
  }
}

var sum=0;
for (var n = 0; n < size; n++) {
  for (var m = 0; m < size; m++) {
    sum=sum+brightness[n][m];
  }
}
console.log("Brightness: "+sum);
