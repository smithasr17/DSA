var convertToTitle = function(columnNumber) {
    let res = ""

    while(columnNumber > 0){
        columnNumber--
        let remainder = columnNumber % 26
        res = String.fromCharCode(65 + remainder) + res
        columnNumber = Math.floor(columnNumber/26)
    }
    return res
};
console.log(convertToTitle(1))


//Excel sheet start from 1 ---> alphabets are 26 so it is  1 - 26
// In Excel:
// A = 1
// B = 2
// ...
// Z = 26

// In Digits :
// 0 1 2 3 ... 25

//Because % 26 works correctly only when numbers start from 0.
// String.fromCharCode --- It converts a number → letter


// Input
// columnNumber = 1
// result = ""

// First Loop Iteration
// Check condition
// columnNumber > 0
// 1 > 0 → true
// So loop runs.

// Subtract 1
// columnNumber--
// 1 → 0

// columnNumber = 0

// Find remainder
// remainder = 0 % 26
// = 0

// Convert number → letter
// 65 + 0 = 65
// String.fromCharCode(65) = "A"

// result = "A" + ""
// = "A"

// Divide by 26
// columnNumber = Math.floor(0 / 26)
// = 0

// Loop Condition Again
// columnNumber > 0
// 0 > 0 → false
// Loop stops.

// Final Result
// return "A"