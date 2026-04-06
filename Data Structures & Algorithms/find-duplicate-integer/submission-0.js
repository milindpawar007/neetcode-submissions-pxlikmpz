class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let fast=nums[0];
        let slow=nums[0]

        fast=nums[nums[fast]];
        slow=nums[slow]

        while(fast!==slow){
            slow=nums[slow];
            fast=nums[nums[fast]]
        }

        slow=nums[0]
        while(fast!==slow){
            fast=nums[fast];
            slow=nums[slow]
        }
        return slow
    }
}
