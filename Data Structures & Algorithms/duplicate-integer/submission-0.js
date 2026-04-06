class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
            
            let numMap = new Set(nums);

            return numMap.size!==nums.length?true:false


    }
}
