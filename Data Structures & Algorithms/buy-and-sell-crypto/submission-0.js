class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

      let maxprofit=0;
      let left=0;
      let right=1;

      while(right<prices.length){

        if(prices[left]<prices[right]){
            let profit= prices[right]-prices[left];
            maxprofit= Math.max(profit,maxprofit)
        }
        else{
            left=right;
        }
        right++
      }

     
      return maxprofit

    }
}
