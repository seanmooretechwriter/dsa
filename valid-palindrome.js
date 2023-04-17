/*

125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

// The runtime complexity of the isPalindrome function is O(n), where n is the length of the input string s.
const isPalindrome = (s) => {
  // Remove all non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  // Use two pointers to check if the string is a palindrome
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

const s = 'A man, a plan, a canal: Panama'
console.log(`isPalindrome(${s}): ${isPalindrome(s)}`) // true

const s2 = 'race a car'
console.log(`isPalindrome(${s2}): ${isPalindrome(s2)}`) // false

const s3 = ' '
console.log(`isPalindrome(${s3}): ${isPalindrome(s3)}`) // true
