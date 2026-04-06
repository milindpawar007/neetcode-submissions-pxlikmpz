class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    robhelper(nums) {

        
           
        if(nums.length ===0) return 0;
        if(nums.length ===1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);
        let dp= new Array(nums.length);
         dp[0]= nums[0];
         dp[1]= Math.max(nums[0],nums[1])

         for(let i=2 ;i<nums.length;i++ )
         {
              dp[i]= Math.max(dp[i-1],dp[i-2]+nums[i])
         }

       return dp[nums.length-1]

    }

    rob(nums){

         if(nums.length<2){ return nums[0]
    }

    let skipLastHouse =  new  Array(nums.length-1);
    let skipFirstHouse = new  Array(nums.length-1);

    for(let i=0;i<nums.length-1;i++){
        skipLastHouse[i]=nums[i]
        skipFirstHouse[i]=nums[i+1]

    }

    let lootskipLastHouse = this.robhelper(skipLastHouse);
    let lootskipFirstHouse =  this.robhelper(skipFirstHouse);

    return Math.max(lootskipLastHouse,lootskipFirstHouse)

    }
}
