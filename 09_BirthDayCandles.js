const array = [4,4,1,3];

function birthdayCakeCandles(candles) {
  // Write your code here
  let tallest = 0;
  let count = 0;
  for (let index = 0; index < candles.length; index += 1) {
    if (candles[index] > tallest) {
      tallest = candles[index];
      count = 1;
    } else if (candles[index] === tallest) {
      count += 1;
    }
  }
  return count;
}