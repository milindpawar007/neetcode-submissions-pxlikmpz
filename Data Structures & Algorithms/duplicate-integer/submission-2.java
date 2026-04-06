class Solution {
    public boolean hasDuplicate(int[] nums) {

        Set<Integer>set= new HashSet<>();
         for(int num:nums)
        {
            set.add(num);
        } 
        return set.size() != nums.length;
        // Map<Integer,Integer>map =new HashMap<>();
        // for(int num:nums)
        // {
        //     if(map.getOrDefault(nums,0)==0)
        //     {
        //          map.put(num,1);
        //     }else
        //     {
        //         return true;
        //     }
           
        // }
        // return false;
        
    }
}