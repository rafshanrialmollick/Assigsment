// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

//.......................................................................................

// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

let calculateDifference = (num1, num2) => {
  return num1 - num2;
};

console.log(calculateDifference(6, 9));

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(6));
console.log(isOdd(7));

//3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

// Method -- 1
function findMin(num) {
  let smallNum = Math.min(...num);
  return smallNum;
}

// Method -- 2

function findSmall(arr) {
  return arr.reduce((smallest, current) => {
    if (current < smallest) {
      return current;
    } else {
      return smallest;
    }
  });
}

// Method -- 3

let arr = [5, 7, 75, 2, 99, 3, 4, 8];
console.log(findSmall(arr));
console.log(findMin(arr));

function getSmallest(numbers) {
  let small = numbers[0];
  for (const num of numbers) {
    if (num < small) {
      small = num;
    }
  }
  return small;
}

let newArr = [5, 7, 75, 2, 99, 3, 4, 8];
console.log(getSmallest(newArr));

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

// Method -- 1
function filterEvenNumbers(evenNum) {
  let getNewArr = [];
  for (const num of evenNum) {
    if (num % 2 === 0) {
      getNewArr.push(num);
    }
  }
  return getNewArr;
}

// Method --- 2

function getEvernNum(evenN) {
  return evenN.filter((n) => {
    return n % 2 === 0;
  });
}

let evenArr = [77, 44, 33, 10, 77, 88, 4, 5, 6, 7, 8, 9, 22];
console.log(filterEvenNumbers(evenArr));
console.log(getEvernNum(evenArr));

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr) {
  let shallowCopy = [...arr];
  let returnSortArr = shallowCopy.sort((a, b) => {
    return a - b;
  });
  console.log(returnSortArr);
}
let sorArr = [77, 44, 33, 10, 77, 88, 4, 5, 6, 7, 8, 9, 22];
sortArrayDescending(sorArr);

// 6) Write a function named lowercaseFirstLetter that takes a capitalized string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
  return str[0].toLowerCase() + str.slice(1);
}
let string = "HELLOOWORLD";
console.log(lowercaseFirstLetter(string));
