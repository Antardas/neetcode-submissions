class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length === 0) return '';
        if(strs.length === 1)return strs[0]
        let common = strs[0];

        for(let i = 0; i < common.length; i++) { 
           for(let j = 0; j < strs.length; j++) {

            if(common[i] !== strs[j][i]) {
                return strs[0][j].slice(0, i)
            }
           }
        }
    }
}
