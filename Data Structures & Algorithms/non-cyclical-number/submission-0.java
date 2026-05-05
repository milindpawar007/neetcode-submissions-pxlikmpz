class Solution {
    public boolean isHappy(int n) {
        Set <Integer> set = new HashSet<>();
        
        while(!set.contains(n) && n!=1)
        {           set.add(n);

            int result=0;
            while(n>0)
            {   int num=n%10;
                result +=  num * num ;
                n=n/10;
            }
            n=result;
        }

        return n==1;
    }
}
