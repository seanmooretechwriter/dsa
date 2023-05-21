/*

211. Design Add and Search Words Data Structure
https://leetcode.com/problems/design-add-and-search-words-data-structure/

Design a data structure that supports adding new words and finding if a string matches 
any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that 
matches word or false otherwise. word may contain dots '.' where dots can be 
matched with any letter.
 
Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 
Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 2 dots in word for search queries.
At most 104 calls will be made to addWord and search.

*/

class TrieNode {
  constructor() {
    this.children = new Map()
    this.isEndOfWord = false
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode()
  }

  // The time complexity of the addWord method is O(m), where m is the length of the input word,
  // because it performs a constant number of operations for each character of the word.
  addWord(word) {
    let current = this.root
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode())
      }
      current = current.children.get(char)
    }
    current.isEndOfWord = true
  }

  // The time complexity of the search method is O(n*26^m), where n is the number of words in the
  // dictionary and m is the length of the input word.
  search(word) {
    return this.searchHelper(word, this.root, 0)
  }

  searchHelper(word, node, index) {
    if (index === word.length) {
      return node.isEndOfWord
    }
    const char = word.charAt(index)
    if (char === '.') {
      for (const child of node.children.values()) {
        if (this.searchHelper(word, child, index + 1)) {
          return true
        }
      }
    } else if (node.children.has(char)) {
      const child = node.children.get(char)
      return this.searchHelper(word, child, index + 1)
    }
    return false
  }
}

const dictionary = new WordDictionary()
dictionary.addWord('hello')
dictionary.addWord('world')
dictionary.addWord('leetcode')
console.log("dictionary.search('hello'):", dictionary.search('hello')) // true
console.log("dictionary.search('h.llo'): ", dictionary.search('h.llo')) // true
console.log("dictionary.search('hell'): ", dictionary.search('hell')) // false
console.log("dictionary.search('leetcoded'): ", dictionary.search('leetcoded')) // false
console.log("dictionary.search('world'): ", dictionary.search('world')) // true
