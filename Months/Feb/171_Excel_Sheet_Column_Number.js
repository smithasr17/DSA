var titleToNumber = function(columnTitle) {
    let res = 0

    for(let i=0; i<columnTitle.length;i++){
        let value = columnTitle.charCodeAt(i) - 64
        res =res*26+ value
    }
    return res
    
};

console.log(titleToNumber("AB"))



// input : columnTitle = "AB"
// output: 28.

//Initial Values
//columnTitle = "AB"
//result = 0

//Step 1: i = 0 (First Character = 'A')
//value = columnTitle.charCodeAt(0) - 64
       //= 'A'.charCodeAt(0) - 64
       //= 65 - 64
       //= 1

//Update result:
//result = result * 26 + value
       //= 0 * 26 + 1
       //= 1
//After first iteration:
//result = 1

//Step 2: i = 1 (Second Character = 'B')
//value = columnTitle.charCodeAt(1) - 64
       //= 'B'.charCodeAt(0) - 64
       //= 66 - 64
       //= 2
//Update result:
//result = result * 26 + value
       //= 1 * 26 + 2
       //= 26 + 2
       //= 28
//After second iteration:
//result = 28
//End of Loop

//i = 2
//i < columnTitle.length → 2 < 2 ❌
//Loop ends.

//Final Result
//return result
//= 28