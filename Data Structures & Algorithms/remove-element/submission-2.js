class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        const arrLen = nums.length;

            for(let i = 0; i < nums.length; i++) {
                if(nums[i] == val){   
                    k++;
                }
            }
        for(let i = 0; i < nums.length; i++) {
            for(let j = 0; j < nums.length-1; j++){
                if(nums[j] == val){

                    const next = nums[j+1];
                    const current = nums[j];
                    nums[j+1] = current;
                    nums[j] = next;
                }
            }
        }
        console.log(nums)
        nums.splice(nums.length - k) 
        console.log(nums,)
        return arrLen - k;
    }
}
