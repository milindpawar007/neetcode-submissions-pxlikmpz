class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let maxlen=0;
        let left=0;
        let right=0;
        let freq= new Map();
        let maxfreq=0;

        while(right<s.length)
        {  
            freq.set(s[right],(freq.get(s[right])||0)+1);
            
            maxfreq= Math.max(maxfreq, freq.get(s[right]));
            while((right-left+1)-maxfreq>k)
            {
                freq.set(s[left],freq.get(s[left])-1)
                left++
            }

            maxlen= Math.max(maxlen,right-left+1)

            right++

           
        }

       
        return maxlen;
    }
}
