// 1. Identify the base case
// 2. Identify the recursive case
// 3. Return when needed (usually 2 returns)


// Write two that finds the factorial of any number. One using recursion and other using for loop


function findFactorialRecursive(num) {
  if (num === 1) {
    return;
  }

  return num * findFactorialRecursive(num - 1);
}

function findFactorialIterative(num) {
  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= num;
  }
  return result;
}
