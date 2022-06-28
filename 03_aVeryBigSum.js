function aVeryBigSum(ar) {
  // Write your code here
  let totalSum = 0
  for (let index = 0; index < ar.length; index += 1) {
    totalSum += ar[index];
  }
  return totalSum;
}