class Solution {
    public int[] topKFrequent(int[] nums, int k) {

        Map<Integer,Integer>map= new HashMap<>();
        List<Integer>[] bucket = new List[nums.length+1];

        for(int num:nums)
        {
            map.put(num,map.getOrDefault(num, 0)+1);
        }

        for(int i=0;i<bucket.length;i++)
        {
            bucket[i]= new ArrayList<>();
        }
         
        for(int key:map.keySet())
        {
           int value = map.get(key);
           bucket[value].add(key);
        } 
        
        // System.out.print(Arrays.toString(bucket));
        int []result= new int[k];
        int index=0;
        for( int i=bucket.length-1; i>0 && index < k;i--  )
        { 
             for(int num:bucket[i])
             {
                result[index]=num;
                index++;
                if(index ==k)
                {
                    return result;
                }
             }

        }

        return result;
        
    }
}
