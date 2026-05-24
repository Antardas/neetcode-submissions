class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagram = new Map();
        for(const str of strs) {
            const key = str.split("").sort().join("");

            if(!anagram.has(key)){
                anagram.set(key, []);
            }

            anagram.get(key).push(str);
        }

        return Array.from(anagram.values())
    }
}
