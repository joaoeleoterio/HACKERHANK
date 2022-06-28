const array = [5, 5, 5, 5, 5];
// const array = [769082435, 210437958, 673982045, 375809214, 380564127]

function miniMaxSum(arr) {
  // Write your code here
  let min = 0;
  let max = 0;
  let sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index];
  }
  min = sum - Math.max(...arr);
  max = sum - Math.min(...arr);
  console.log(min, max);

}

miniMaxSum(array);