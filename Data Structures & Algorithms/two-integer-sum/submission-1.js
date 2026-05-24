class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const remaining = {} ;

       for (let i = 0; i < nums.length; i++) {
        const remainingTarget = target - nums[i];
        
        if(remaining[remainingTarget]) {
            return [remaining[remainingTarget], i]
        }else {
            remaining[i] = nums[i];
        }
        console.log(remaining[remainingTarget],i)
       }
    }
}
