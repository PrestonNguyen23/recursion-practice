// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product = 1) {
 // Check if n is negative, return null in that case
 if (n < 0) {
  return null;
}

// Base case: if n is 0 or 1, return the product
if (n <= 1) {
  return product;
}

// Multiply the current number (n) with the product
product *= n;

// Recursively call the function with the decreased value of n and the updated product
return factorial(n - 1, product);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // Base case: if the array is empty, return 0
  if (array.length === 0) {
    return 0;
  }

  // Take the first element of the array and add it to the sum of the rest of the array
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Base cases: if n is 0, it is even; if n is 1, it is odd
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }

  // For negative numbers, make a recursive call with the absolute value
  if (n < 0) {
    return isEven(-n);
  }

  // For positive numbers, make a recursive call with (n - 2)
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){
    return 0;
  }
  return n - 1 + sumBelow(n - 1);
};




// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, result = []) {
   // Base case: stop recursion when x is greater than or equal to y
   if (x >= y - 1) {
    return result;
  }

  // Recursively call range with the next integer and concatenate it to the result
  return range(x + 1, y, result.concat(x + 1));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    // Base case: if the exponent is 0, return 1
    if (exp === 0) {
      return 1;
  }

  // If the exponent is negative, compute the reciprocal with a positive exponent
  if (exp < 0) {
      return 1 / (base * exponent(base, -exp - 1));
  }

  // Recursive call to compute the exponent
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base cases: 0 and 1 are not powers of two
  if (n === 0 || n === 1) {
    return n === 1;
  }

  // Recursive case: check if n is divisible by 2 and recursively check the result
  return n % 2 === 0 && powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // Base case: if the string is empty or has only one character, it is already reversed
  if (string.length <= 1) {
    return string;
  }

  // Recursive case: reverse the substring excluding the first character
  // and concatenate the first character at the end
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Remove non-alphanumeric characters and convert to lowercase for case-insensitive comparison
  const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Base case: if the string is empty or has only one character, it is a palindrome
  if (cleanString.length <= 1) {
    return true;
  }

  // Compare the first and last characters, and recursively check the substring
  if (cleanString[0] === cleanString[cleanString.length - 1]) {
    return palindrome(cleanString.slice(1, -1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  } else if (y > 0) {
    return x + multiply(x, y - 1);
  } else {
    return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Base case: if both strings are empty, they are identical
  if (str1 === '' && str2 === '') {
    return true;
  }

  // Base case: if either string is not empty and the first characters are identical,
  // recursively compare the rest of the strings
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }

  // If the first characters are not identical, the strings are different
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, index = 0, result = []){
  if (index === str.length) {
    return result;
  }

  result.push(str[index]);

  return createArray(str, index + 1, result);
};

// 17. Reverse the order of an array
var reverseArr = function (array, start = 0, end = array.length - 1) {
  if (start >= end) {
    return array;
  }

  // Swap elements at the start and end indices
  [array[start], array[end]] = [array[end], array[start]];

  // Recursively reverse the remaining subarray
  return reverseArr(array, start + 1, end - 1);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, result = []) {
  if (length === 0) {
    return result;
  }

  result.push(value);

  return buildList(value, length - 1, result);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  if (array.length === 0) {
    return count;
  }

  if (array[0] === value) {
    count++;
  }

  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[], index = 0) {
  if (index === array.length) {
    return output;
  }

  output.push(callback(array[index]));

  return rMap(array, callback, output, index + 1);
};

// Example usage:
var timesTwo = function(x) {
  return x * 2;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }

  if (n <= 1) {
    return n;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, index = 0) {
  if (index === input.length) {
    return [];
  }

  const capitalizedWord = input[index].toUpperCase();

  return [capitalizedWord, ...capitalizeWords(input, index + 1)];
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, index = 0) {
  if (index === array.length) {
    return [];
  }

  const word = array[index];
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  return [capitalizedWord, ...capitalizeFirst(array, index + 1)];
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, index = 0, tally = {}) {
    // Base case: if the index reaches the end of the string
    if (index === str.length) {
      return tally;
  }

  var currentChar = str[index];

  // Check if the character is already a key in the tally object
  if (tally[currentChar]) {
      // If yes, increment the count
      tally[currentChar]++;
  } else {
      // If no, add a new key with a count of 1
      tally[currentChar] = 1;
  }

  // Recursive call with the next index
  return letterTally(str, index + 1, tally);
}


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, index = 0, compressedList =[]) {
  // Base case: if the index reaches the end of the list
  if (index === list.length) {
    return compressedList;
}

// Check if the current element is not the same as the next element
if (list[index] !== list[index + 1]) {
    compressedList.push(list[index]);
}

// Recursive call with the next index
return compress(list, index + 1, compressedList);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, index = 0, result = []) {
  // Base case: if the index reaches the end of the array
  if (index === array.length) {
    return result;
}

// Check if the current element is not zero or the previous element is not zero
if (array[index] !== 0 || (index > 0 && array[index - 1] !== 0)) {
    result.push(array[index]);
}

// Recursive call with the next index
return minimizeZeroes(array, index + 1, result);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, index = 0, result = []) {
   if (index === array.length) {
    return result;
}

if (index === 0) {
    // Make the first number positive
    result.push(Math.abs(array[index]));
} else {
    // Alternate the sign based on the index
    if (index % 2 === 1) {
        result.push(-Math.abs(array[index]));
    } else {
        result.push(Math.abs(array[index]));
    }
}

// Recursive call with the next index
return alternateSign(array, index + 1, result);
}

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, index = 0) {
    // Define a function to convert single digits to their word equivalents
    function digitToWord(digit) {
      switch (digit) {
          case '0':
              return 'zero';
          case '1':
              return 'one';
          case '2':
              return 'two';
          case '3':
              return 'three';
          case '4':
              return 'four';
          case '5':
              return 'five';
          case '6':
              return 'six';
          case '7':
              return 'seven';
          case '8':
              return 'eight';
          case '9':
              return 'nine';
          default:
              return digit;
      }
  }

  // Base case: if the index reaches the end of the string
  if (index === str.length) {
      return str;
  }

  // Check if the character at the current index is a digit
  if (/[0-9]/.test(str[index])) {
      // Replace the digit with its word equivalent
      str = str.substring(0, index) + digitToWord(str[index]) + str.substring(index + 1);
  }

  // Recursive call with the next index
  return numToText(str, index + 1);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------