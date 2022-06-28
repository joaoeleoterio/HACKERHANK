function compareTriplets(a, b) {
  // Write your code here
  let score = [0, 0];
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] > b[index]) {
      score[0] += 1;
    } else if (a[index] < b[index]) {
      score[1] += 1;
    }
  }
  return score;

}