package DSA.DSA.Data_Structure.Arrays.Easy.Running_Sum_of_1d_Array.Solutions;

class Solution {
    public int[] runningSum(int[] nums) {
        for(int i = 1; i < nums.length; i++){
            nums[i] += nums[i - 1];
        }
        return nums;
    }

    public void main(String... args) {
        int[] arr = {1, 2, 3, 4, 5};
        int[] op = runningSum(arr);
        System.out.println(op);
    }
}