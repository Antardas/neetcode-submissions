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
            let char = strs[0][i]
            for(let j = 1; j < strs.length; j++) {
                if(i >= strs[j].length || char !== strs[j][i]){
                    console.log(common.slice(0,i))
                    return common.slice(0, i)
                }
            }
        }
    }
}
