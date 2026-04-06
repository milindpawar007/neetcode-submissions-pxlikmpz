class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

     compareMap(map1, map2) {
        if (map1.size !== map2.size) return false;

        for (let [key, val] of map1) {
            if (map2.get(key) !== val) return false;
        }

        return true;
    }
    checkInclusion(s1, s2) {

        let map1= new Map();

        for(let char of s1){
            map1.set(char,(map1.get(char)||0)+1)
        }
        
        for(let i=0;i<s2.length;i++){

            let window=s2.slice(i,i+s1.length);

             let map2= new Map();

              for(let char of window)
              {
                    map2.set(char,(map2.get(char)||0)+1)
              }

              if(this.compareMap(map1,map2))
              {
                return true
              }
        }

        

        return false
    }
}
