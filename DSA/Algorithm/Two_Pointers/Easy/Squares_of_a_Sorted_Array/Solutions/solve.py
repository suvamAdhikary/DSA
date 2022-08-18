def sortedSquares(nums):
    left = 0
    right = len(nums) - 1
    res = [None]*len(nums)
    i = len(nums) - 1
    while(i >= 0):
        if nums[left] ** 2 > nums[right] ** 2:
            res[i] = nums[left] ** 2
            left += 1
            i -= 1
        else:
            res[i] = nums[right] ** 2
            right -= 1
            i -= 1
    return res

def main():
    print(sortedSquares([-7,-3,2,3,11]))

main()