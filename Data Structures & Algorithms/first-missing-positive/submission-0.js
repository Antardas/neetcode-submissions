class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const numMap = new Set();

        for (let i = 0; i < nums.length; i++){
            if(nums[i] < 0) continue;
            numMap.add(nums[i])
        }
        for (let i = 1; i <= nums.length; i++){
            if(!numMap.has(i)) {
                return i;
            }
        }
    }
}
