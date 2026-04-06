class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      let len= height.length;  
      let leftArr = new Array(len).fill(0)
      let rightArr = new Array(len).fill(0)
      let result=0;
      
      leftArr[0]=height[0];

      for(let i=1;i<len;i++){
        leftArr[i]= Math.max(leftArr[i-1],height[i])
      }
      
      rightArr[len-1]=height[len-1];

      for(let j=len-2;j>=0;j--){
        rightArr[j]=Math.max(rightArr[j+1],height[j])
      }

     for(let i=0;i<len;i++){
        result += Math.min(rightArr[i],leftArr[i])-height[i]
     }

      return result;


    }
}
