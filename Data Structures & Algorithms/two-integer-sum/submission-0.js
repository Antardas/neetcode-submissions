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
        
        if(remaining[nums[i]]) {
            return [remaining[nums[i]], i]
        }else {
            remaining[remainingTarget] = i;
        }
        console.log(remaining[remainingTarget],i)
       }
    }
}
