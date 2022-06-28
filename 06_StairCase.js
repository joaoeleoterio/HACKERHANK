const number = 6;

function staircase(n) {
  // Write your code here
  let stairs = '';
  for (let index = 0; index < n; index += 1) {
    stairs += ' '.repeat(n - index - 1) + '#'.repeat(index + 1) + '\n';
    // console.log(stairs);
  }
  console.log(stairs);
}

staircase(number);