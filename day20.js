function divisitorsArray(number) {
  var divisitors=new Array();
  for (var i = 1; i <= number; i++) {
    if (number%i===0) {
      divisitors.push(i);
    }
  }
  return divisitors;
}

function presentsNumber(array) {
  var l=array.length;
  var result=0;
  for (var i = 0; i < l; i++) {
    result=result+array[i]*10;
  }
  return result;
}

function UnoptimisedFirstPart(input) {
  var t1 = new Date().getTime();
  var houses=new Array(1E6);
  var i=0;
  for (i = 0; i < houses.length; i++) {
    houses[i]=presentsNumber(divisitorsArray(i));
    if (houses[i]>=input) {
      break;
    }
  }
  var t2 = new Date().getTime();
  return [i, t2-t1];
}

function OptimisedFirstPart(input) {
  var t1 = new Date().getTime();
  var n=1E6;
  var houses={};
  for (var i = 1; i < n; i++) {
    for (var j = i; j < n; j+=i) {
      houses[j]=(houses[j]||0)+i*10;
      if (houses[j]>=input) {
        break;
      }
    }
  }
  for (var k = 1; k < input; k++) {
    if (houses[k]>=input) {
      break;
    }
  }
  var t2 = new Date().getTime();
  return [k, t2-t1];
}

function OptimisedSecondPart(input) {
  var t1 = new Date().getTime();
  var n=1E6;
  var houses={};
  for (var i = 1; i < n; i++) {
    var fifty=0;
    for (var j = i; fifty < 50; j+=i) {
      houses[j]=(houses[j]||0)+i*11;
      if (houses[j]>=input) {
        break;
      }
      fifty++;
    }
  }
  for (var k = 1; k < input; k++) {
    if (houses[k]>=input) {
      break;
    }
  }
  var t2 = new Date().getTime();
  return [k, t2-t1];
}

var task=33100000;
console.log(["Result","Time"]);
//console.log(UnoptimisedFirstPart(task));
console.log(OptimisedFirstPart(task));
console.log(OptimisedSecondPart(task));
