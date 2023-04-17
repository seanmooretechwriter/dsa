/*

20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

// The runtime complexity of the isValid function is O(n), where n is the length of the input string s.
const isValid = (s) => {
  const stack = []
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return false
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}

const s = '(({([])}))'
console.log(`isValid(${s}): ${isValid(s)}`) // true

const s2 = '()[]{}'
console.log(`isValid(${s2}): ${isValid(s2)}`) // true

const s3 = '(]'
console.log(`isValid(${s3}): ${isValid(s3)}`) // false

const isValidFP = (s) => {
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  const checkValid = (stack, chars) => {
    if (chars.length === 0) {
      return stack.length === 0
    }
    const char = chars[0]
    if (pairs[char]) {
      return stack.length > 0 && stack[stack.length - 1] === pairs[char]
        ? checkValid(stack.slice(0, -1), chars.slice(1))
        : false
    } else {
      return checkValid([...stack, char], chars.slice(1))
    }
  }

  return checkValid([], s)
}
