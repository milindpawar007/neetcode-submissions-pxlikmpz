class Solution {
    public int[] countBits(int n) 
    {
      int []result= new int[n+1];

      for(int i=1;i<=n;i++)
      {
           int num = i;
           while(num!=0)
           {
             num= num & (num-1);
             result[i]++;  
           }
      }
      return result;
        
    }
}
