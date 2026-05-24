    const strsMap = new Map()
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (const str of strs) {
            res+= str.length + '#' + str;
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];

        while(i < str.length){
            let j = i;

            while(str[j] !== '#') {
                j++;
            }
            const length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length
            const decodedStr = str.substring(i, j);
            res.push(decodedStr)
            i = j;
        }

        return res;
    }
}
