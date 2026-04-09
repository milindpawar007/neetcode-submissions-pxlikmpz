class Solution {
    public int[] countBits(int n) 
    {
      int []result= new int[n+1];

      for(int i=0;i<=n;i++)
      {
        int count=0;
        for(int j=0;j<32;j++)
        {
            int mask= 1 << j;
            int res = mask & i;
            if(res!=0)
            {
              count++;
            }
        }
         result[i]=count;
      }
      return result;
        
    }
}
