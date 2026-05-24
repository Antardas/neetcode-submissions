class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isRowValid(board, row) {
        const visited = Array.from({length: 10}).fill(0)
        for(let i = 0; i < 9; i++){
            let val = board[row][i]

            if( val === '.') {
                continue;
            }
            val = Number(val)
            if(visited[val] !== 0){
                return false
            }
            visited[val]++;
            
        }

        return true

    }
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isColValid(board, col){
        const visited = Array.from({length: 10}).fill(0)
        for(let i = 0; i < 9; i++){
            let val = board[i][col]

            if( val === '.') {
                continue;
            }
            val = Number(val)
            if(visited[val] !== 0){
                return false
            }
            visited[val]++;
            
        }

        return true
    }
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isSubBoardValid(board, startRow, colStart){
         const visited = Array.from({length: 10}).fill(0)
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                let val = board[startRow+i][colStart+j];

                if (val === '.') continue;
                val = Number(val)
                if(visited[val] !== 0){
                    return false;
                }
                visited[val]++;


            }
        }

        return true
    }

    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {


        for(let i = 0; i < 9; i++){
           const res = this.isRowValid(board, i);
           if(!res) return false;
            
        }


        for(let i = 0; i < 9; i++){
            const res =  this.isColValid(board, i);
            if(!res) return false;
        }

         for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                const res = this.isSubBoardValid(board, i - i % 3, j - j%3 )
                if(!res) return false;
            }
        }

        return true


        
    }
}
