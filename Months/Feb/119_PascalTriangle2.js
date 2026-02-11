var getRow = function(rowIndex){
    let res =[]

    for(let i=0; i<=rowIndex;i++){  // i<=rowIndex i want considering the last index also
        let row = []

        for(let j=0;j<=i;j++){
            if(j===0 || j===i){
                row.push(1)
            }
            else{
                row.push(res[i-1][j-1] + res[i-1][j])
            }
        }
        res.push(row)
    } 
    return res[rowIndex]  // i want rowIndex from the result which is stored in the form of array
}

console.log(getRow(3))