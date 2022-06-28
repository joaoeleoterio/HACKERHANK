const ar = [1,2,3]

function simpleArraySum(ar) {
  // Write your code here
  let totalSum = 0

  for (let index; index < ar.length; index += 1) {
    totalSum += ar[index];
    console.log(ar);
  }

  return totalSum;
}
