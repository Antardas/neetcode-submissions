class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        map.set("BIG_VALUE", nums[0]);
        map.set("BIG_VALUE_COUNT", 1);
        for(const num of nums) {
            if(!map.has(num)){
                map.set(num, 0);
            }
            map.set(num, map.get(num)+1);

            if(map.get(num) >= map.get('BIG_VALUE')){
                map.set("BIG_VALUE", num);
                map.set("BIG_VALUE_COUNT", map.get(num));
            }   
        }

        return map.get("BIG_VALUE");
    }
}
