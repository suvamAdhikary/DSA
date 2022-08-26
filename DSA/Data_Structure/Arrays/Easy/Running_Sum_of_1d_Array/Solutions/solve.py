
def runningSum(nums):
    for i, num in enumerate(nums):
        if i != 0:
            nums[i] = nums[i] + nums[i - 1]
    return nums
