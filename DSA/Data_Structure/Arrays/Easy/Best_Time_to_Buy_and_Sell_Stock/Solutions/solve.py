def maxProfit(prices):
    currentPrice = prices[0]
    maxProfit = 0
    for price in prices:
        if currentPrice > price:
            currentPrice = price
        else:
            maxProfit = max([maxProfit, price - currentPrice])
    return maxProfit

def main():
    print(maxProfit([7,6,4,3,1]))

main()