class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const len = nums.length;
        for(let i = 0; i < len; i++) {
            // we have to swap  value use ciclelic  sort 
            // ignore duplicate
            while(i >0 && i < len && nums[nums[i] -1] !== nums[i]){
                const correctPos = nums[i];
                const prev = nums[correctPos - 1];
                nums[correctPos - 1] =   correctPos;
                nums[i] = prev
            }
        }
        console.log(nums)
        let n = 1
        for(let i = 0; i < len; i++) {
            if(n !== nums[i]) return n
            n++;
        }
        return n
    }
}
