class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

     isValid(s) {
        while (s.includes("()") || s.includes("{}") || s.includes("[]")) {
            s = s.replace("()", "");
            s = s.replace("{}", "");
            s = s.replace("[]", "");
        }
        return s === "";
    }
    // isValid(s) {
    //    let stack=[];

    //    let bracket = new Map([
    //         [')', '('],
    //         [']', '['],
    //         ['}', '{']
    //     ]);

    //     for(let char of s){
            
    //         if(!bracket.has(char)){
    //            stack.push(char);
    //         }
    //         else
    //         {
    //          if(stack.length > 0 &&  bracket.get(char)===stack[stack.length-1]){
    //             stack.pop()
    //          }else{
    //             return false
    //          }
    //         }
    //     }

    //     return stack.length===0;

    // }
}
