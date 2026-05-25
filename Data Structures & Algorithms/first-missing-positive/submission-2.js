class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        
        for (let i = 1; i < nums.length+2; i++){
            let found = false
            let j = 0
           for (; j < nums.length; j++){
            if(nums[j] === i) {
                found = true;
                break;
            }
           }

           if(found === false ) {
            return  i
           }
        }

       
    }
}
