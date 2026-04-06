class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m= matrix.length;
        let n= matrix[0].length;

        let low=0;

        let high=m*n-1;

        while(low<=high){

            let mid= Math.floor((low+high)/2);
            let row = Math.floor(mid/n);
            let col= mid % n;
            
            let val= matrix[row][col]
            if(target===val){
                return true
            }
            else if(val<target)
            {
               low=mid+1
            }else{
                high=mid-1
            }
        }

        return false
    }
}
