def moveZeroes(nums):
    """
    Do not return anything, modify nums in-place instead.
    """
    j = 0
    for index, num in enumerate(nums):
        if num != 0:
            nums[j], nums[index] = nums[index], nums[j]
            j += 1
    return nums

def main():
    print(moveZeroes([0, 2,2, 0, 0, 0, 9]))

main()