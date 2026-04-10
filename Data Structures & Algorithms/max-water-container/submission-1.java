class Solution {
    public int maxArea(int[] heights) 
    {
        
         int left=0;
         int right= heights.length-1;
         int result=Math.min(heights[left],heights[right]) *(right-left);
        for(int i=1;i<heights.length;i++)
        {
            
            
            if(heights[left]>heights[right])
            { 
                  right--;
            }else
            {
                left++;
            }
            int temp= Math.min(heights[left],heights[right]) *(right-left);
            result= Math.max(result,temp);
         }
        return result;
    }
}
