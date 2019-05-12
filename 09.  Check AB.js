function checkAB(num) {
  // you can only write your code here!
  var pos = [
    [],
    []
  ];
  //if a found, put it to index 0. b to index 1
  for (var i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      pos[0].push(i);
    }
    if (num[i] === 'b') {
      pos[1].push(i);
    }
  }
  // console.log(pos);
  //check if is there a and b within distance of 4. End the for loop after found is set to 'true'
  var found = false;
  for (i = 0; i < pos[0].length && !found; i++) {
    for (var j = 0; j < pos[1].length && !found; j++) {
      if (Math.abs(pos[0][i] - pos[1][j]) === 4) {
        found = true;
      }
    }
  }
  return found;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false