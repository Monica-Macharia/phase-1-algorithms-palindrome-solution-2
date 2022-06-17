function isPalindrome(word) {
  // loop through
  for(let i = 0; i< word.length/2; i++) {
  const j = word.length - 1 - i;
if(word[i] !== word[j]) {
  return false;
}else{
  return true;
}
}
}

/* 
  Loop through the word upto the middle.
  r a c e c a r
  i           j
  r a c e c a r
    i       j
  if i = j return true else false
 */

/*
  loop through the word, and compare the first half of the word tracked by (i) to the reversed second half tracked with (j). return true if they are equal.
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
