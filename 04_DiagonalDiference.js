function diagonalDifference(arr) {
  // Write your code here
  let leftToRight = 0;
  let rightToLeft = 0;
  for (let index = 0; index < arr.length; index += 1) {
    leftToRight += arr[index][index];
    rightToLeft += arr[index][arr.length - 1 - index];
  }
  return Math.abs(leftToRight - rightToLeft);
  
}