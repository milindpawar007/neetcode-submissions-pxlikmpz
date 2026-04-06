class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      
      let map = new Map();

      for(let num of nums){
        map.set(num,true)
      }

      for(let [key ,value] of map){
        if(map.has(key-1)){
              map.set(key,false)
        }
      }
      
      let maxlength=0;

      for(let num of nums)
      {
         if(map.get(num)===true){
            let currentlength= 1;
            let value=num+1;

            while(map.has(value))
            {
                currentlength++;
                value++
            }

            maxlength =Math.max(maxlength,currentlength)
         }
      }

       
       return maxlength


    }
}
