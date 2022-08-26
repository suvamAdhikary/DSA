def twoSum(nums, target):
    obj = {}
    for index, num in enumerate(nums):
        check = str(target - num)
        if check in obj:
            return [obj[check], index]
        else:
            obj[str(num)] = index
    return

def main():
    print(twoSum([2,7,11,15], 9))

main()