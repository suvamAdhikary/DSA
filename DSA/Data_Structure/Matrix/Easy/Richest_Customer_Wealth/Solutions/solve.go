package main

import "fmt"

func maximumWealth(accounts [][]int) int {
    var res int = 0
    for i:= 0; i < len(accounts); i++ {
        var total int = 0
        for j := 0; j < len(accounts[i]); j++ {
            total += accounts[i][j]
        }
        if res < total {
            res = total
        }
    }
    return res
}

func main() {
    arr := [][]int{{1,2,3},{3,2,4}}
    fmt.Print(maximumWealth(arr))
}
