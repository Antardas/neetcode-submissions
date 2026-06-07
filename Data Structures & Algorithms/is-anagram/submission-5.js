class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();

        if(t.length !== s.length) return false;

        for(const c of s) {
            sMap.set(c, (sMap.get(c) || 0) + 1 )
        }


        for(const c of t) {
            tMap.set(c, (tMap.get(c) || 0) + 1 )
        }

        for(const c of t) {
            if(tMap.get(c) !== sMap.get(c)) return false
        }
        return true
    }
}
