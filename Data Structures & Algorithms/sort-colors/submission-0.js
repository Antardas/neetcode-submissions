class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        this.mergeSort(nums, 0, nums.length-1)    
    }

    mergeSort(nums, start, end) {
        if(start >= end) return;

        const mid = Math.floor((start + end) / 2);
        this.mergeSort(nums, start, mid);
        this.mergeSort(nums, mid+1, end);

        this.merge(nums, start, mid, end)
    }

    merge(nums, start, mid, end) {
        let i = start;
        const left = nums.slice(start, mid+1);
        const right = nums.slice(mid+1, end+1);
        let leftIndex = 0, rightIndex = 0;

        while(leftIndex < left.length && rightIndex < right.length ){
            if(left[leftIndex] <= right[rightIndex]) {
                nums[i] = left[leftIndex]
                i++;
                leftIndex += 1;
            }else {
                nums[i] = right[rightIndex]
                i++;
                rightIndex += 1;
            }
        }

        while(leftIndex < left.length) {
            nums[i] = left[leftIndex];
            i++;
            leftIndex++;
        }

        while(rightIndex < right.length) {
            nums[i] = right[rightIndex];
            i++;
            rightIndex++;
        }
    }
}
