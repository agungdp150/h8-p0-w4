// Source Searching di Google

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var hasil = 0;
  var angkaMin = 0;
  for (var i = 1; i <= angka; i++) {
      if (angka % i === 0) {
          hasil = i.toString().length + (angka / i).toString().length;
          // console.log('if pertama ==> ' + hasil)
      }
      if (angkaMin === 0 || hasil < angkaMin) {
          angkaMin = hasil;
          // console.log('if kedua ==> ' + angkaMin)
      }
  }
  return angkaMin;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2