class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
         
       int left =0 , right= 0;
     
       Deque<Integer>q= new LinkedList<>();
       int [] result= new int[ nums.length-k+1];

       while(right<nums.length)
       {
          while(!q.isEmpty() && nums[q.getLast()]<nums[right])
          {
            q.removeLast();
          }
          q.add(right);
          if(left>q.getFirst())
          {
            q.removeFirst();
          }
          if(right+1>=k)
          {
            result[left]=nums[q.peekFirst()];
            left++;
          }
          right++;
       }
        
        return result;
    }
}
