class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const addTwoNums = (l1, l2) => {
  let carry = 0
  let previousNode = new ListNode()
  const headNode = previousNode
  while (l1 || l2 || carry) {
    let val1 = 0
    let val2 = 0
    if (l1) {
      val1 = l1.val
      l1 = l1.next
    }
    if (l2) {
      val2 = l2.val
      l2 = l2.next
    }
    const sum = val1 + val2 + carry
    carry = sum > 9 ? 1 : 0
    const digit = sum % 10
    const currentNode = new ListNode(digit)
    previousNode.next = currentNode
    previousNode = currentNode
  }
  return headNode.next
}

function addTwoNumbers(l1, l2) {
  let carry = 0
  let sum = 0
  let dummy = new ListNode(0)
  let curr = dummy

  while (l1 || l2 || carry) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = sum >= 10 ? 1 : 0
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  return dummy.next
}

let linkedList = {}
let node01 = new ListNode(9)
let node02 = new ListNode(1)
node01.next = node02
linkedList.next = node01

const reverseLinkedList = (list) => {
  let currentListNode = list
  let prevListNode = null
  let nextListNode = null
  while (currentListNode != null) {
    nextListNode = currentListNode.next
    //console.log('nextListNode: ', nextListNode)
    currentListNode.next = prevListNode
    //console.log('currentListNode: ', currentListNode)
    prevListNode = currentListNode
    //console.log('prevListNode: ', prevListNode)
    currentListNode = nextListNode
    //console.log('currentListNode (x2): ', currentListNode)
  }
  //list = prevListNode
  //return list
  return prevListNode
}

//console.log('linkedList: ', linkedList)
//console.log('reverseLinkedList: ', reverseLinkedList(linkedList))

//let temp = linkedList
//while (temp.next) {
//  console.log('temp.next.val:', temp.next.val)
//  temp = temp.next
//}

let linkedList02 = {}
let node03 = new ListNode(1)
linkedList02.next = node03

const printLinkedList = (list) => {
  let printer = list
  while (printer.next) {
    console.log('printer.next.val:', printer.next.val)
    printer = printer.next
  }
}
//printLinkedList(linkedList)

//let result = addTwoNumbers(linkedList, linkedList02)
//printLinkedList(addTwoNumbers(linkedList, linkedList02))
printLinkedList(addTwoNums(linkedList, linkedList02))

let child01 = { val: 9 }
let child02 = { val: 1 }
child01.childProp = child02
let parentWrapper = {}
parentWrapper.childProp = child01

//console.log('parentWrapper: ', parentWrapper)

//console.log(
//  'parentWrapper.childProp.childProp:',
//  parentWrapper.childProp.childProp,
//)

let tempHolder = parentWrapper.childProp.val
//console.log(
//  'parentWrapper.childProp.childProp:',
//  parentWrapper.childProp.childProp,
//)
parentWrapper.childProp.val = parentWrapper.childProp.childProp.val
parentWrapper.childProp.childProp.val = tempHolder

//console.log('parentWrapper after swap: ', parentWrapper)

//console.log(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`)

//console.log('23 % 10: ', 23 % 10)

//console.log('Math.floor(23 / 10): ', Math.floor(23 / 10))

const traverseNestedObjectChain = (list, propName, valName) => {
  let prop
  while (list) {
    prop = 0
    if (list) {
      prop = list[valName]
      list = list[propName]
      console.log(`prop: ${prop}`)
    }
  }
}

//traverseNestedObjectChain(parentWrapper, 'childProp', 'val')

const myObj = {}
myObj.prop = { val: 2 }
//myObj.prop.val = 2

myObj.prop.prop = { val: 3 }
//myObj.prop.prop.val = 3

const walkProperties = (obj) => {
  let propVal
  while (obj) {
    propVal = 0
    if (obj) {
      propVal = obj.val
      obj = obj.prop
      console.log(`propVal: ${propVal}`)
    }
  }
}

//walkProperties(myObj)
