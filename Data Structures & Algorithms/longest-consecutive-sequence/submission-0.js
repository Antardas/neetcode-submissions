class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet = new Set(nums);
        let max = 0

        for (const num of nums) {
            console.log(num)
            let length = 0, current = num;
            if(!hashSet.has(current-1)) {
                            while(hashSet.has(current)) {
                length++;
                current++;
            }

            max = Math.max(length, max)
            }


        }

        return max
    }
}
