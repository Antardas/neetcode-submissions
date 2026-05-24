class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagram = new Map();
        for(const str of strs) {

            const count = new Array(26).fill(0)
            
            for(const char of str) {
                count[char.charCodeAt(0) - 97]++
            }

            const key = count.join("#")

            if(!anagram.has(key)){
                anagram.set(key, []);
            }

            anagram.get(key).push(str);
        }

        return Array.from(anagram.values())
    }
}
