class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count=0;
    function expandAroundCenter(left,right)
    {
          while(left>=0 && right<s.length && s[right]===s[left]){
            count++;
            left--;
            right++;
         
          }
    }
   
   for(let i=0;i<s.length;i++)
   {
       expandAroundCenter(i,i)
       expandAroundCenter(i,i+1)
   }

    return count;
    }
}
