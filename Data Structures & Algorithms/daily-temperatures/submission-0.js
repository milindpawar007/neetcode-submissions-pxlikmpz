class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) 
    {
 let result= new Array(temperatures.length).fill(0)

for(let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];
    if(i===temperatures.length-1){
        break;
    }

    for(let j = i + 1; j < temperatures.length; j++) 
    {
         if(currentTemp<temperatures[j]){
            result[i]=j-i;
            break;
         }  
    }
 
}

  return result
    }
}
