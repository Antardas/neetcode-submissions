class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r=1, sell = 0;


        while(r < prices.length) {
            if(prices[l] < prices[r]){
                // sell = Math.max(sell, prices[r]-prices[l])
                sell += prices[r]-prices[l]

            }else {
                // l = r;
            }

            r++;
            l++;
        }

        return sell;
    }
}
