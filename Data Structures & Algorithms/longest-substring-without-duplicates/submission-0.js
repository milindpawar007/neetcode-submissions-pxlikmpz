class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       
       let maxlen=0;
       let left=0;
       let map= new Map();

       for(let right=0;right<s.length;right++){
             const char= s[right]
            
            while(map.has(char) && map.get(char)>=left)
            {
                map.delete(s[left])
                left++
            }

             map.set(char,right)
             maxlen= Math.max(right-left+1,maxlen)
       }

       return maxlen;
    }
}
