var spiralOrder = function(matrix) {
    let res = []
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length-1

    while(left <= right && top <= bottom){
        // 1. Left ->  right
        for(let col = left; col<= right; col++){
            res.push(matrix[top][col])
        }
        top ++
        // 2. Top -> bottom
        for(let row = top; row <= bottom; row++){
            res.push(matrix[row][right])
        }
        right --
        // 3. Right -> left
        if(left <= right){
            for(let col = right; col >= left; col --){
                res.push(matrix[bottom][col])
            }
            bottom --
        // 4. Bottom -> top
        if(top <= bottom){
            for(let row = bottom; row >= top; row--){
                res.push(matrix[row][left])
            }
            left ++
        }    
        }
    }
    return res
}

const result = spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
console.log(result)