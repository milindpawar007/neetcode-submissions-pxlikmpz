class Solution {
    public int hammingWeight(int n) 
    { 
        int result=0;
        for(int i=0;i<32;i++)
        {
            int mask = 1<<i;
            int res = mask & n;
            if(res!=0)
            {
                result++;
            }

        }
        return result;
    }
}
