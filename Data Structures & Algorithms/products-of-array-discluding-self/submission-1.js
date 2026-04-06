class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) 
    {
   
        let n = nums.length;
        let leftArray = new Array(n).fill(1);
        let rightArray = new Array(n).fill(1);
        let result = new Array(n).fill(0);

            for (let i = 1; i < n; i++) {
                leftArray[i] = leftArray[i - 1] * nums[i - 1];
            }

            for (let i = n - 2; i >= 0; i--) {
                rightArray[i] = rightArray[i + 1] * nums[i + 1];
            }

            for (let i = 0; i < n; i++) {
                result[i] = leftArray[i] * rightArray[i];
            }

        return result;
    }
}
