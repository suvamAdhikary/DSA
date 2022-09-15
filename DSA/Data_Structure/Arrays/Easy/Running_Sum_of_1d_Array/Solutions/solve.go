package main

import "fmt"

func runningSum(nums []int) []int {
    for i:=1; i<len(nums); i++ {
        nums[i] += nums[i - 1]
    }
    return nums
}

func main() {
    arr := []int{1,2,3,4,5}
    fmt.Print(runningSum(arr))
}