class Solution {
    public boolean isValid(String s) {
         if(s.length()==1 || s==""){return false;}
        Stack<Character> st = new Stack<>();

        for(char ch:s.toCharArray())
        {
            if(ch=='('){st.push(')');}
            else if(ch=='{'){st.push('}');}
            else if(ch=='['){st.push(']');}
            else
            {
                if(st.isEmpty())
                {
                    return false;
                }
                if( !st.isEmpty() && ch!=st.pop())
                {
                    return false;
                }
                

            }

        }
        return st.isEmpty();
    }
}
