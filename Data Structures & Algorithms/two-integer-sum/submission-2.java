class Solution {
    public int[] twoSum(int[] nums, int target) 
    {

    Map<Integer,Integer>map= new HashMap<>();
    int index=0;
    for( int num:nums)
    {
         int key= target-num;
         if(map.containsKey(key))
         {
      
            return new int[]{map.get(key),index};
         }else
         {
            map.put(num,index);
         }
         index++;
    }

      return new int[]{}   ;
    }
}
