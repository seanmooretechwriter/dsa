/*

271. Encode and Decode Strings
https://leetcode.com/problems/encode-and-decode-strings/

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
 // ... your code
 return encoded_string;
}
Machine 2 (receiver) has the function:

vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).

*/

// The runtime complexity of the encode function is O(n), where n is the total length of all strings in the strs array.
const encode = (strs) => {
  return strs.map((str) => `${str.length}:${str}`).join('')
}

// The runtime complexity of the decode function is also O(n), where n is the length of the encoded string.
const decode = (s) => {
  const result = []
  let i = 0

  while (i < s.length) {
    let colonIndex = s.indexOf(':', i)
    let length = parseInt(s.slice(i, colonIndex))
    let str = s.slice(colonIndex + 1, colonIndex + 1 + length)
    result.push(str)
    i = colonIndex + 1 + length
  }

  return result
}
