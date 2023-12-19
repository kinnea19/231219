// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// My answers
// function sumTwoSmallestNumbers(numbers) {
//   const min1 = Math.min(...numbers);
//   const min2 = Math.min(...[...numbers].filter((ele) => ele !== min1));

//   return min1 + min2;
// }

// Better answer
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
