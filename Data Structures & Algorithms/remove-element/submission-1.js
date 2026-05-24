class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;

            for(let i = nums.length -1; i >=0; i--) {
                if(nums[i] == val){   
                    k++;
                }
            }
        for(let i = nums.length -1; i >=0; i--) {
            for(let j = nums.length - 1; j >= 0; j--){
                if(nums[j] == val && j !== nums.length - 1){

                    const next = nums[j+1];
                    const current = nums[j];
                    nums[j+1] = current;
                    nums[j] = next;
                }
            }
        }
        console.log(k)
        nums.splice(k+1,nums.length-1)
        return k;
    }
}
