class Solution {
    public List<List<String>> groupAnagrams(String[] strs) 
    {
           if (strs.length == 0) {
            return new ArrayList<>();
        }

      
        Map<String,List<String>> map= new HashMap<>();

        for(String str:strs)
        {
            char []chararr= str.toCharArray();
            Arrays.sort(chararr);
           String sortedword = new String(chararr);
           
           if(!map.containsKey(sortedword))
           {
            map.put(sortedword, new ArrayList<>());
           }
           map.get(sortedword).add(str);
        }
       
      return new ArrayList<>(map.values());
    }
}
