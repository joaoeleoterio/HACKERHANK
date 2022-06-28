const array = [1, 1, 0, -1, -1]

function plusMinus(arr) {
  // Write your code here
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach(element => {
    if (element > 0) {
      positives += 1;
    } else if (element < 0) {
      negatives += 1;
    } else {
      zeros += 1;
    }
  });
  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length.toFixed(6)));
  console.log((zeros / arr.length).toFixed(6));
}