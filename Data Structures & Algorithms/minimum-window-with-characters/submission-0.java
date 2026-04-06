class Solution {
    public String minWindow(String s, String t) {

        int[] Smap= new int[256];
        int [] Tmap= new int [256];
        int minlen=Integer.MAX_VALUE;
        int minstart=0;
        int left=0;

         for (int i = 0; i < t.length(); i++) {
            Tmap[t.charAt(i)]++;
        }


        for(int right=0;right<s.length();right++)
        {
            Smap[s.charAt(right)]++;

            while(compareMap( Smap,  Tmap))
            {
               if(right-left+1<minlen)
               {
                minlen=right-left+1;
                minstart=left;
               }
               Smap[s.charAt(left)]--;
               left++;
            }
        }

        return minlen==Integer.MAX_VALUE ?"": s.substring(minstart,minstart+minlen);
        
    }
      public Boolean compareMap(int [] Smap, int [] Tmap) {

        for(int i=0;i<Tmap.length;i++)
        {
            if(Tmap[i]>Smap[i])
            {
                return false;
            }
        }
        return true;

      }
}
