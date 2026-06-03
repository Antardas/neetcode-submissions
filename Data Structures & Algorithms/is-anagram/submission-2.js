class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedS = s.sort();
        const sortedT = t.sort();

        if(sortedS === sortedT)return true;
        return false;
    }
}
