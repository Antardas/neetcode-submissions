    const strsMap = new Map()
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const randStr = strs.join('ö')
        return randStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        return str.split('ö')
    }
}
