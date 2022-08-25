package DSA.DSA.Data_Structure.Matrix.Easy.Richest_Customer_Wealth.Solutions;

class Solution {
    public static int maximumWealth(int[][] accounts) {
        int res = 0;
        for(int i = 0; i < accounts.length; i++){
            int total = 0;
            for(int j = 0; j < accounts[i].length; j++){
                total += accounts[i][j];
            }
            res = Math.max(res, total);
        }
        return res;
    }

    public static void main(String... args) {
        int[][] arr = {{1,5},{7,3},{3,5}};
        int op = maximumWealth(arr);
        System.out.println(op);
    }
}