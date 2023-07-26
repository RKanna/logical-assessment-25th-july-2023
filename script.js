`use strict`;

//1.Given an array of integers, rearrange the elements in a way that all the even numbers come before the odd numbers

// function arrayOfIntegers(arr) {
//   let evenArray = [];
//   let oddArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const arrayElement = arr[i];
//     if (arr[i] % 2 == 0) {
//       evenArray.push(arr[i]);
//     } else {
//       oddArray.push(arr[i]);
//     }
//   }
//   const finalArray = evenArray.concat(oddArray);
//   console.log(finalArray);
// }
// arrayOfIntegers([5, 7, 9, 6, 2, 15, 17]);

//2.Write a function to find the missing number in an array of integers from 1 to N

// function findMissingNumber(arr) {
//   let sum = 0;
//   let min = Number.MAX_SAFE_INTEGER;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   const n = max - min + 1;
//   const expectedSum = (n * (min + max)) / 2;
//   const missingNumber = expectedSum - sum;

//   console.log(missingNumber);
// }
// findMissingNumber([5, 7, 8, 9]);

//3.Given a string with parentheses, check if it is balanced (each opening parenthesis has a corresponding closing parenthesis).

// function isBalancedParentheses(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char === "(") {
//       count++;
//     } else if (char === ")") {
//       count--;
//       if (count < 0) {
//         return false;
//       }
//     }
//   }
//   return count === 0;
// }
// console.log(isBalancedParentheses("(()(()))"));
// console.log(isBalancedParentheses("(()(())))"));

//4. Implement a function to convert a decimal number to its binary representation

// function frequentRunnerConversion(decimalValue) {
//   const firstBinaryValue = decimalValue % 2;
//   const divident = decimalValue / 2;
//   const dividentArr = [];
//   dividentArr.push(divident);
//   const numbers = [];
//   numbers.push(firstBinaryValue);

//   for (let i = 0; i < dividentArr.length; i++) {
//     const dividentElement = dividentArr[i];

//     if (!dividentElement == 0 && !dividentElement == 1) {
//       firstBinaryValue = decimalValue % 2;
//       divident = decimalValue / 2;
//       dividentArr.push(divident[i]);
//       numbers.push(firstBinaryValue);
//       console.log(numbers);
//     } else {
//       console.log(numbers);
//     }
//   }
// }
// frequentRunnerConversion(15815);

//5. Implement a function that returns the longest word in a sentence

// function findLongestWord(str) {
//   let stringModify = "";
//   const ele = str.split(" ");
//   console.log(ele);
//   for (let i = 0; i < ele.length; i++) {
//     const arrayEle = ele[i];
//     if (arrayEle.length > stringModify.length) {
//       stringModify = arrayEle;
//     }
//   }
//   console.log(stringModify);
// }
// findLongestWord("i love programming");

//6.Given a matrix (2D array), rotate it 90 degrees clockwise

// function rotateMatrix(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = i; j < matrix[0].length; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }
//   for (let row of matrix) {
//     row.reverse();
//   }
//   return matrix;
// }
// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// console.log(
//   rotateMatrix([
//     [10, 11],
//     [12, 13],
//   ])
// );

//7.Write a function to check if a given string contains only unique characters (no repeating characters)

// function checkStringRepeat(str) {
//   const charAppearances = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charAppearances[char]) {
//       charAppearances[char]++;
//     } else {
//       charAppearances[char] = 1;
//     }
//   }
//   for (const char in charAppearances) {
//     if (charAppearances[char] > 1) {
//       console.log(`false`);
//       return;
//     }
//   }
//   console.log(`true`);
// }
// checkStringRepeat("world");

//8.Given an array of integers and a target sum, find the index of two numbers that add up to the target sum.

// function findTwoSum(nums, targetSum) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === targetSum) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }
// const nums = [2, 7, 11, 3, 15];
// const targetSum = 18;
// const result = findTwoSum(nums, targetSum);
// if (result) {
//   const [index1, index2] = result;
//   console.log(`${index1}, ${index2}`);
// }

//9.Write a function that generates all possible combinations of a given string.

// function allCombinations(str) {
//   const result = [];
//   const n = str.length;
//   const totalCombinations = 2 ** n;

//   for (let i = 1; i < totalCombinations; i++) {
//     let combination = "";
//     for (let j = 0; j < n; j++) {
//       if ((i & (1 << j)) !== 0) {
//         combination += str[j];
//       }
//     }
//     result.push(combination);
//   }

//   return result;
// }
// console.log(allCombinations("abc"));
// console.log(allCombinations("dog"));

//10.Given a string, find the most frequent character(s) and their count(s).

function mostFrequentCharacter(str) {
  const charFrequency = {};
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  let maxFrequency = 0;
  for (const char in charFrequency) {
    if (charFrequency[char] > maxFrequency) {
      maxFrequency = charFrequency[char];
    }
  }
  const mostFrequentChars = {};
  for (const char in charFrequency) {
    mostFrequentChars[char] = charFrequency[char];
  }
  return mostFrequentChars;
}
console.log(mostFrequentCharacter("hello"));
console.log(mostFrequentCharacter("abracadabra"));
