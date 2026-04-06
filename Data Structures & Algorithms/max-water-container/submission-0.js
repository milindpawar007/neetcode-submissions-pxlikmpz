class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      
      let left= 0;
      let right= heights.length-1;
      let maxarea=0;

      while(left<right){

        let area= Math.min(heights[left],heights[right])*(right-left);
        maxarea= Math.max(area,maxarea);

        if(heights[left]<heights[right]){
            left++
        }else{
            right--
        }
      }
     
     return maxarea


    }
}
