class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedS = s.split('').join('').sort();
        const sortedT = t.split('').join('').sort();

        if(sortedS === sortedT)return true;
        return false;
    }
}
