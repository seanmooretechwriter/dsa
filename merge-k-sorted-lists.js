/*

23. Merge k Sorted Lists
https://leetcode.com/problems/merge-k-sorted-lists/

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

// The mergeKLists function has a time complexity of O(n log k), where n is the total number of nodes and k is the number of lists. This is because the function performs k/2 merges for log k levels, and each merge operation takes O(n) time.
function mergeKLists(lists) {
  if (!lists || lists.length === 0) {
    return null
  }

  // The mergeTwoLists function has a time complexity of O(n), where n is the total number of nodes in the two lists being merged.
  const mergeTwoLists = (l1, l2) => {
    const dummy = new ListNode()
    let curr = dummy

    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1
        l1 = l1.next
      } else {
        curr.next = l2
        l2 = l2.next
      }
      curr = curr.next
    }

    curr.next = l1 || l2
    return dummy.next
  }

  while (lists.length > 1) {
    const mergedLists = []

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i]
      const l2 = i + 1 < lists.length ? lists[i + 1] : null
      mergedLists.push(mergeTwoLists(l1, l2))
    }

    lists = mergedLists
  }

  return lists[0]
}

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
const list3 = new ListNode(2, new ListNode(6))
console.log(
  'mergeKLists([list1, list2, list3]): ',
  mergeKLists([list1, list2, list3]),
)
// output: ListNode {
//   val: 1,
//   next: ListNode {
//     val: 1,
//     next: ListNode {
//       val: 2,
//       next: ListNode {
//         val: 3,
//         next: ListNode {
//           val: 4,
//           next: ListNode {
//             val: 4,
//             next: ListNode {
//               val: 5,
//               next: ListNode { val: 6, next: null }
//             }
//           }
//         }
//       }
//     }
//   }
// }
