class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n);

 
        let left = 1;
        for (let i = 0; i < n; i++) {
            result[i] = left;
            left *= nums[i];
        }

        // Suffix pass
        let right = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }

        return result;
    }
}