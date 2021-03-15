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


//Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21.....


//O(n)
function fibonacciIterative(n) {
  const fibonacciNums = [0, 1, 1];

  for (let i = 3; i <=n; i++) {
    fibonacciNums.push(fibonacciNums[i-1] + fibonacciNums[i-2]);
  }

  return fibonacciNums[n];
}


//O(2^n)
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function reverseStringIterative(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

function reverseStringRecursive(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length -1] + reverseStringRecursive(str.slice(0, str.length - 1));
}