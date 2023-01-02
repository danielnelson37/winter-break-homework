// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
// Question 1: Multiples of 3 or 5
/*ALGORITHM
Create a counter variable storing the sum of numbers that are only multiples of 3 or 5
Iterate through array 
  if individual number is divisible by 3 or 5
    increment counter variable
Return counter variable
*/
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// Question 2: Who likes it?
/*Algorithm:
Use conditionals to implement the given conditions:
- no names show up
- 1 name shows up 
- 2 names show up
- 3 names show up
- 4 or more names show up

if there are no names present
  return 'no one likes this'
else if theres only one name present 
  return `name likes this`
else if theres two names present 
  return `name1 and name2 likes this`
else if theres three names present
  return `name1, name2, and name3 likes this`
else
  return `the first two names followed by the number of names(excluding the first 2 names) liked this`
  '
*/
function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//Question 3: Find the unique number
/*ALGORITHM
sort array into ascending order
Uses a condiion to check the first and last elements of the array
  if first number isnt equal to the second, the first number is the unique number
Use a conditional statement to check if the last number is not equal to thesecond to last, the last number i
s the unique number; return last number
*/
function findUniq(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // If the first number is not equal to the second, it must be the unique number
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  // If the last number is not equal to the second to last, it must be the unique number
  if (arr[arr.length - 1] !== arr[arr.length - 2]) {
    return arr[arr.length - 1];
  }
}

//Question 4: Find the parity outlier
/*Algorithm
Create variables, evenCounter, oddCounter, outlier
Iterate through the array
  if integer is even then itll increment counter variable for even numbers
  otherwise it'll increment counter variable for odd numbers
  
if number of even numbers is 1
  the outlier will be the found using the find() method, looks for which number is even
else
  the outlier will be the number that is odd
return the outlier */
function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;
  let outlier = 0;

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  if (evenCount == 1) {
    outlier = integers.find(num => num % 2 == 0);
  } else {
    outlier = integers.find(num => num % 2 != 0);
  }

  return outlier;
}

//Question 5: Counting duplicates
/*ALGORITHM:
Create a frequency map of the characters in the input string
Create a variable that'll:
  - Convert given string to lowercase (to deal with case insensitivity)
  - Split the string into an array of characters that will be iterated through
  - Uses reduce() method to create a frequency map of the characters, where keys are the characters and 
    the values are the number of occurances of each character 
                    Reduce method:
                    is used to reduce the array to a single value and executes a provided 
                    function for each value of the array (from left-to-right) and the return value of the 
                    function is stored in an accumulator. 

Count the number of characters that occur more than once
Create a counter that stores the number of duplicated characters that show up
Iterate thrugh the frequency map and counts the number of characters that occur more than once
  if the character count is more than 1, increment counter variable 
Return counter variable.

*/
function duplicateCount(text) {
  // Create a frequency map of the characters in the input string
  const charCount = text.toLowerCase().split('').reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});

  // Count the number of characters that occur more than once
  let duplicateCount = 0;
  for (const char in charCount) {
    if (charCount[char] > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
}

//Question 6: Moving zeros to the end
/*ALGORITHM
Use the filter method to create a new array with all the non-zero elements from the original array, store it into a variable
Use reduce method to get a single number of all the zeros in the array, store it into a variable
Use the array constructor and fill() method to create a new array with the same number of zeros as 
the original array, store it into a variable 
                      The fill() method changes all elements in an array to a static value, from a start index 
                      (default 0) to an end index (default array.length). It returns the modified array.
Concatenates the two arrays using concat() method and return 
*/
function moveZeros(arr) {
  // Filter the array to keep only the non-zero elements
  const nonZeros = arr.filter(el => el !== 0);

  // Count the number of zeros in the array
 const zeroCount = arr.reduce((count, el) => count + (el === 0), 0);

  // Create an array of zeros with the same length as the number of zeros in the original array
  const zeros = Array(zeroCount).fill(0);

  // Concatenate the non-zero elements and the zeros array
  return nonZeros.concat(zeros);
}

//Question 7: Simple pig latin
/*Algorithm:
Use a regular expression to match each word within given string(replace() method replaces each match)
      The regular expression `b(\w)(\w*)\b` will match a word at the beginning or ending of a string or
      surrounded by word boundaries (`\b`). 
      The first group (`(\w)`) matches the first letter of the word and the second group (`(\w*)`)matches 
      rest of the word. 
      Replace method replace each match with the second group (`$2`), followed by the first group (`$1`) and "ay"
*/
function pigIt(str) {
  return str.replace(/\b(\w)(\w*)\b/g, '$2$1ay');
}

