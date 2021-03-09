// Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
  var total = 0;
  for(var i = 0; i <= num; i++){
    if(i > 0){
      total += i
    }
  }
  return total;
}

console.log(sigma(3));
console.log(sigma(5));

// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
  var total = num;
  if(num === 0){
  return 1
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(3));
console.log(factorial(5));

// Create a function to generate Fibonacci numbers.
// In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.
// Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).
// Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

// create a function that accepts one argument
function fibonacci(n){
  // create an array starting with the values of 0 and 1;
 var sequence = [0,1];
 for(var i = 2; i <= n; i++){
   // every number after the first two is the sum of the two before it
   sequence.push(sequence[i - 2] + sequence[i - 1]);
 }
 return sequence[n];
}

console.log(fibonacci(7));

// Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr){
  if(arr.length < 2){
    return null
  } else {
    return arr[arr.length-2];
  }
}

console.log(secondToLast([42, true, 4, "Liam", 7]));

// Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function toLast(arr, n){
  if(arr.length < 2){
    return null
  } else {
    return arr[arr.length - n];
  }
}

console.log(toLast([5,2,3,6,4,9,7],3))

// Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr){
  if(arr.length < 2){
    return null;
  } else {
    var high1 = arr[0];
    var high2 = arr[1];
    for(var i = 2; i < arr.length; i++){
      // if the current position is larger than high1
      if(arr[i] > high1){
        // set high1 to high2
        high2 = high1;
        // current iteration now becomes highest value
        high1 = arr[i]
        // if the current position is higher than high2
      } else if (arr[i] > high2) {
        // current iteration now becomes secondhighest value
        high2 = arr[i];
      }
    }
    return high2;
  }
}

console.log(secondLargest([42, 1, 4, 3.14, 7]));

// Create a function that changes a given array to list each existing element twice, retaining original order.
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false]

function doubvarrouble(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(arr[i]);
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(doubvarrouble([4, "Ulysses", 42, false]));
