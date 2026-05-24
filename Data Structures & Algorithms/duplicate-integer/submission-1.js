class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};
        let flag = false;
        for(let i = 0;  i < nums.length; i++) {
           if(!hash[nums[i]]) {
            hash[nums[i]] = 1
           }else {
            hash[nums[i]] = hash[nums[i]] + 1;
           }

           if(hash[nums[i]] >= 2){
            flag=true;
            break;
           }
        }

        return flag;
        
    }
}
