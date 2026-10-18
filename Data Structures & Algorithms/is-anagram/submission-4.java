class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length())
        {
            return false;
        }

        Map<Character,Integer> smap= new HashMap<>();
        Map<Character,Integer> tmap= new HashMap<>();
        
        for(char ch:s.toCharArray())
        {
            if(smap.getOrDefault(ch, 0)==0)
            {
               smap.put(ch,1);
            }else
            {
                 smap.put(ch,smap.get(ch)+1);
            }
        }
        for(char ch:t.toCharArray())
        {
            if(tmap.getOrDefault(ch, 0)==0)
            {
               tmap.put(ch,1);
            }else
            {
                 tmap.put(ch,tmap.get(ch)+1);
            }
        }
        

        for(char ch:smap.keySet())
        {
           
            if(!smap.get(ch).equals(tmap.get(ch)))
            {
                return false;
            }
        }
        return true;
    }
}
