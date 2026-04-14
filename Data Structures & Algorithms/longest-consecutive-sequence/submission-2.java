class Solution {
    public int longestConsecutive(int[] nums) 
    {

        Map<Integer ,Boolean>map= new HashMap<>();

        for(int num:nums)
        {
            map.put(num,false);
        }
        
        for(int num:nums)
        {
            if(map.containsKey(num-1))
            {
                 map.put(num,true);
            }
        }

        int maxLength = 0;
       
        for(int num:nums)
        {
             if(map.get(num)==false)
            {
                int current=num;
                int length=1;
                while(map.containsKey(current+1))
                {  
                    length++;
                    current++;
                }
                maxLength=Math.max(length,maxLength);

            }
        }
         
         return maxLength;
    }
}
