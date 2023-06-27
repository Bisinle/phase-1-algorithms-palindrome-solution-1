function isPalindrome(word) {
  // Write your algorithm here
let wordArray = word.split('')
console.log(wordArray);
let reversedWord = wordArray.reverse().join('')
console.log(reversedWord);
return reversedWord === word
}

/* 
  Add your pseudocode here
  aplit the word into letter and copy them in a  array1
  let array2 = []
LOOP
  starting from the end of the array1

    for each word


    push it in array2
END OF LOOP
  join the word in arrat2 to make them one sentence

  if joinedARRY2 === word
    return trye
  else 
    return false

*/

/*
It starts by creating an empty array wordArray using the spread operator ([...word]). This splits the word string into an array of individual characters. For example, if word is "hello," wordArray will be ['h', 'e', 'l', 'l', 'o'].

Another empty array newWordArray is created.

A for loop is used to iterate through the characters of the word in reverse order. Starting from the last character (word.length - 1 index), it iterates until the first character (index 0). During each iteration, the current character is pushed into newWordArray. This effectively reverses the order of the characters from word.

The reversed characters from newWordArray are then joined back into a string using the join("") method, and the resulting string is stored in the variable joinedNweWordArray.

Finally, the function checks if the joinedNweWordArray (reversed word) is equal to the original word. If they are the same, the function returns true, indicating that the word is a palindrome. Otherwise, it returns false.
 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
