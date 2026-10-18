class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

   
        List<List<String>> data= new ArrayList<>();
           
        if(strs.length==0)
        { 
             return data;
        }  
        Map<String,List<String>> map =new HashMap<>();
        for(String str:strs)
        {
               char [] chars = str.toCharArray();
               Arrays.sort(chars);
               String key = new String(chars);
               if(! map.containsKey(key))
               {
                   map.put(key, new ArrayList<>());
               }
                map.get(key).add(str);
        }
        
        for(String key:map.keySet())
        {
            data.add(map.get(key));
        }
        return data;
    }
}
