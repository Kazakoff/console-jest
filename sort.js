function compareNumeric(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

let arr = [ 5, 2, 15 ];

arr.sort(compareNumeric);

console.log(arr);  // 1, 2, 15
