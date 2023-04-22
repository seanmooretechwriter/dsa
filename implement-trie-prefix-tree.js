/*

208. Implement Trie (Prefix Tree)
https://leetcode.com/problems/implement-trie-prefix-tree/

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 

Constraints:

1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.

*/

class TrieNode {
  constructor() {
    this.children = new Map()
    this.isEndOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  // The runtime complexity of the insert method is O(m), where m is the length of the input word.
  insert(word) {
    let node = this.root
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode())
      }
      node = node.children.get(char)
    }
    node.isEndOfWord = true
  }

  // The runtime complexity of the search method is O(m), where m is the length of the input word.
  search(word) {
    let node = this.root
    for (const char of word) {
      if (!node.children.has(char)) {
        return false
      }
      node = node.children.get(char)
    }
    return node.isEndOfWord
  }

  // The runtime complexity of the startsWith method is O(m), where m is the length of the input prefix.
  startsWith(prefix) {
    let node = this.root
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false
      }
      node = node.children.get(char)
    }
    return true
  }
}

const trie = new Trie()
trie.insert('apple')
console.log('trie.search("apple"): ', trie.search('apple')) // true
console.log('trie.search("app"): ', trie.search('app')) // false
console.log('trie.startsWith("app"): ', trie.startsWith('app')) // true
trie.insert('app')
console.log('trie.search("app"): ', trie.search('app')) // true
