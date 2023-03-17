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
