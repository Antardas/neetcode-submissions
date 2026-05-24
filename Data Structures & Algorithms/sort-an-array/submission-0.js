class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
      return  this.mergeSort(nums)
    }

    mergeSort(nums){
        if(nums.length <= 1){
            return nums;
        }

        const mid = Math.floor(nums.length / 2);
        const left = nums.slice(0, mid);
        const right = nums.slice(mid);

        const leftSorted = this.mergeSort(left);
        const rightSorted = this.mergeSort(right);
    console.log(leftSorted, rightSorted)

        return this.merge(leftSorted, rightSorted);

    }


    merge(left, right){
        const result = [];
        let leftIndex = 0, rightIndex = 0;
        console.log(Array.isArray(left), Array.isArray(right))

        while(leftIndex < left.length && rightIndex < right.length ){

            if(left[leftIndex] <= right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            }else {
                result.push(right[rightIndex]);
                rightIndex++;
            }

        }

        return result.concat(
            left.slice(leftIndex)
        ).concat(right.slice(rightIndex))

    }
}
