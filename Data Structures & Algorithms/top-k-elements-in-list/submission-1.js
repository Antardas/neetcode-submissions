class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = Array.from({length: nums.length+1}, () => []);
        const counter = new Map();
        // console.log(counter);
        for(let i = 0; i < nums.length; i++){
            if(!counter.has(nums[i])){
                counter.set(nums[i], 0)
            }
            counter.set(nums[i], counter.get(nums[i]) + 1);
        }

        console.log(counter)
        for(const [key, value] of counter){
            console.log(key, value)
            result[value].push(key);
        }
        const final = []
        for(let i = result.length - 1; i >= 0; i--){
            for(let j = 0; j < result[i].length;j++ ) {
                final.push(result[i][j]);
                if(final.length === k){
                    return final;
                }
            }
        }

        return []
    }
}
