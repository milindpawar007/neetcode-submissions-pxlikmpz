class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if(strs.length===1) return [strs];
        let map = new Map()

        for(let word of strs){
            let sortedWord= word.split("").sort().join("");

              if(!map.has(sortedWord))
              {
                    map.set(sortedWord,[word])
              }
              else{
                 map.get(sortedWord).push(word)
              }
        }

        return Array.from(map.values())
    }
}
