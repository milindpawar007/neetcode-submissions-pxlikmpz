class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) 
    {
      
      let setdata= new Set(nums);
      
      let maxlength=0;

      for(let num of setdata)
      {
           if(!setdata.has(num-1))
           {
                    let templen=1;
                    let tempnum=num+1;

                    while(setdata.has(tempnum)){
                        templen++;
                        tempnum++;
                    }
                    maxlength =Math.max(maxlength,templen)
            }
      }
     

       
       return maxlength


    }
}
