class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    psm = [];
    constructor(matrix) {
        if(!matrix.length) {
            return ;
        }
        const n = matrix.length;
        const m = matrix[0].length;
console.log(n,m)
        // add to padding
        for(let i = 0; i <= n;i++){
            this.psm[i] = Array.from({length: m+1}).fill(0);
        }

        for(let r = 1; r<=n;r++){
            for(let c = 1; c<=m;c++){
                this.psm[r][c] = matrix[r-1][c-1] + this.psm[r-1][c] + this.psm[r][c-1] - this.psm[r-1][c-1];
            }    
        }

        console.log(matrix)
        console.log('After Prefix Sum\n');
        console.log(this.psm)

    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return  this.psm[row2+1][col2+1] - this.psm[row1][col2+1] - this.psm[row2+1][col1] + this.psm[row1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
