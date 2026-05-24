class Solution {
    

    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = Array.from({length: 9},() => new Set())
        const cols = Array.from({length: 9},() => new Set())
        const subMat = Array.from({length: 9},() => new Set())
         for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                let val = board[i][j]

                if( val === '.') {
                    continue;
                }

                val = Number(val);

                if(rows[i].has(val)) {
                    return false
                }

                rows[i].add(val);


                if(cols[j].has(val)) return false;

                cols[j].add(val);

                const idx = Math.floor(i / 3) * 3 + Math.floor(j/3);

                if(subMat[idx].has(val)) return false;

                subMat[idx].add(val)
            }
        }

        return true


        
    }
}
