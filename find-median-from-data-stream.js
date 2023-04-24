/*

295. Find Median from Data Stream
https://leetcode.com/problems/find-median-from-data-stream/

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 
Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
 
Constraints:

-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.
 

Follow up:

If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

*/

class MedianFinder {
  constructor() {
    this.arr = []
  }

  // The addNum function has a time complexity of O(log n) because it performs binary search on the sorted array.
  addNum(num) {
    let left = 0
    let right = this.arr.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (this.arr[mid] < num) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    this.arr.splice(left, 0, num)
  }

  //  The findMedian function has a time complexity of O(1) because it just accesses the middle elements of the array.
  findMedian() {
    const len = this.arr.length
    if (len % 2 === 0) {
      const mid = len / 2
      return (this.arr[mid - 1] + this.arr[mid]) / 2
    } else {
      const mid = Math.floor(len / 2)
      return this.arr[mid]
    }
  }
}

const mf = new MedianFinder()
mf.addNum(1)
mf.addNum(2)
console.log(mf.findMedian()) // 1.5

mf.addNum(3)
console.log(mf.findMedian()) // 2
