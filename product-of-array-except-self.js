const productExceptSelfSimple = (nums) => {
  const output = []
  let product = 1

  // calculate the product of all elements to the left of each element
  for (let i = 0; i < nums.length; i++) {
    output[i] = product
    product *= nums[i]
  }

  product = 1

  // calculate the product of all elements to the right of each element
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= product
    product *= nums[i]
  }

  return output
}

function productExceptSelf(nums) {
  const n = nums.length
  const output = new Array(n).fill(1)
  let leftProduct = 1
  let rightProduct = 1

  for (let i = 0; i < n; i++) {
    output[i] *= leftProduct
    leftProduct *= nums[i]
    output[n - i - 1] *= rightProduct
    rightProduct *= nums[n - i - 1]
  }

  return output
}

const a = [1, 2, 3, 4]
console.log(`productExceptSelf(${a}): ${productExceptSelf(a)}`)
