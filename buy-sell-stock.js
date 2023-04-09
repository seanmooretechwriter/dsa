/*

121. Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

// The time complexity of this code is O(n), where n is the length of the prices array.
const getMaxProfit = (prices) => {
  // initialize minimum price to the first price
  // in the prices array
  let minimumPrice = prices[0]
  // initialize maximum profit to zero because it
  // hasn't been calculated yet
  let maximumProfit = 0

  // step through each price element in the prices array
  for (const currentPrice of prices) {
    // check the current element's value and
    // use the Math.min function to asssign or overwrite
    // the lower of the two values to minimumPrice
    // either the current value already
    // stored in minimumPrice or the value in the
    // currentPrice element if it is less
    minimumPrice = Math.min(minimumPrice, currentPrice)
    // substract the value in the currentPrice element
    // from the value stored in minimumPrice to calculate
    // the maximum profit in the current iteration through
    // the prices array
    let newCalculatedProfit = currentPrice - minimumPrice
    console.log(`newCalculatedProfit: ${newCalculatedProfit}`)
    // using the Math.max method to overwrite the value stored in
    // maximumProfit with the value calculated and stored in
    // newCalculatedProfit if the value is greater than what's
    // been previously stored in maximumProfit
    maximumProfit = Math.max(maximumProfit, newCalculatedProfit)
  }

  return maximumProfit
}

const prices = [7, 1, 5, 3, 6, 4]
console.log(`getMaxProfit([7,1,5,3,6,4]): ${getMaxProfit(prices)}`)

const getMaxProfitFP = (prices) => {
  const minimumPrice = Math.min(...prices)
  const maximumProfit = Math.max(
    ...prices.map(
      (price, index) => price - Math.min(...prices.slice(0, index + 1)),
    ),
  )
  return maximumProfit
}
