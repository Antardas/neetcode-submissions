class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;
        const hashS = {};
        const hashT = {};

        for (const char of s) {
            if(hashS[char]){
                hashS[char]++;
            }else {
                hashS[char] = 1;
            }
        }

        for (const char of t) {
            if(hashT[char]){
                hashT[char]++;
            }else {
                hashT[char] = 1;
            }
        }

        for (const char of s) {
            if(hashS[char] !== hashT[char]) return false;
        }
        return true;
    }
}
