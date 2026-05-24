class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let candidate1=-1, candidate2 = -1,count1 = 0, count2 = 0;

        for (let i = 0; i < nums.length; i++) {

            if (candidate1 === nums[i]) {
                count1++;
            }else if (candidate2 === nums[i]) {
                count2++;
            }
            else if(count1=== 0) {
                count1 = 1;
                candidate1 = nums[i];
            } else if(count2=== 0) {
                count2 = 1;
                candidate2 = nums[i];
            }else {
                count1--;
                count2--;
            }

            
            
        }
        count1 = 0;
        count2 = 0;
        for (const num of nums ) {
            if(num === candidate1 && candidate1 != -1) {
                count1++;
            }

            if(num === candidate2 && candidate2 != -1) {
                count2++;
            }
        }

        const output = []
        if(count1 > Math.floor(nums.length/3)) {
            output.push(candidate1)
        }
        if(candidate1 !== candidate2 && count2 > Math.floor(nums.length/3)) {
            output.push(candidate2)
        }
        return output
    }
}
