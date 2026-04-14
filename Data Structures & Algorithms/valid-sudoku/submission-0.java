class Solution {
    public boolean isValidSudoku(char[][] board) {

        Map<Integer,Set<Character>> rowMap= new HashMap<>();
        Map<Integer,Set<Character>> colMap= new HashMap<>();
        Map<String,Set<Character>>  boxMap= new HashMap<>();
        
        for(int row= 0 ; row< 9;row++)
        {
            for(int col=0 ;col<9;col++)
            {
                char ch = board[row][col];
                String key= row/3+"-"+col/3;
                if(ch=='.')
                {
                    continue;
                }


                if(rowMap.containsKey(row) && rowMap.get(row).contains(ch)) return false;
                if(colMap.containsKey(col) && colMap.get(col).contains(ch)) return false;
                if(boxMap.containsKey(key) && boxMap.get(key).contains(ch)) return false;

                if(!rowMap.containsKey(row))
                {
                    rowMap.put(row,new HashSet<>());
                }
                 if(!colMap.containsKey(col))
                {
                    colMap.put(col,new HashSet<>());
                }
                 if(!boxMap.containsKey(key))
                {
                    boxMap.put(key,new HashSet<>());
                }

                rowMap.get(row).add(ch);
                colMap.get(col).add(ch);
                boxMap.get(key).add(ch);
            }
        }

        return true;
      
    }
}
