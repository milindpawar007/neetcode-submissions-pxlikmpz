class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        let result=""

        function expandAroudnCenter(left,right){

            while(left>=0&&right<s.length&&s[left]===s[right]){
                left--;
                right++
            }

            return s.slice(left+1,right)
            
        }

        for(let i=0 ;i <s.length;i++)
        {
             let oddchar= expandAroudnCenter(i,i);
             let evenchar= expandAroudnCenter(i,i+1)

             if(oddchar.length>result.length){
                result=oddchar
             }
              if(evenchar.length>result.length){
                result=evenchar
             }
        }

        return result
    }
}
