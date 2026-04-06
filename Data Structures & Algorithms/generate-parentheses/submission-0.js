class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

     let result=[]
     
     function backtrack(open,close,n,currenstring)
     {
             if(open===n && close===n){
                result.push(currenstring)
             }
             if(open<n){
                backtrack(open+1,close,n,currenstring+"(")
             }
             if(close<open){
                backtrack(open,close+1,n,currenstring+")")
             }
     }

     backtrack(0,0,n,"")
     return result


    }
}
