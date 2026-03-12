var rotate = function(matrix){
    const n = matrix.length

    for(let i=0; i<n; i++){
        for(let j=i;j<n; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }


        for(let i =0; i<n; i++){
          matrix[i].reverse()  
        }
    
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
console.log(matrix)