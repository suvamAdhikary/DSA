def maximumWealth(accounts):
    res = 0
    for row in accounts:
        total = 0
        for num in row:
            total += num
        if(res < total):
            res = total
    return res

def main():
    print(maximumWealth([[1,3,4],[2,5,6]]))

main()      