class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack=[];
        
        for(let token of tokens )
        {
             if(token==="+"||token==="-"||token==="*"||token==="/")
             {
                  let num2= stack.pop(); 
                  let num1= stack.pop();
                  let result;

                    switch (token) 
                    {
                        case "+":
                            result = num1 + num2;
                            break;
                        case "-":
                            result = num1 - num2;
                            break;
                        case "*":
                            result = num1 * num2;
                            break;
                        case "/":
                        
                            result = Math.trunc(num1 / num2);
                            break;
                    }
               stack.push(result)
             }
             else
             {
                 stack.push(parseInt(token))
             }

        }

        return stack.pop()
    }
}
