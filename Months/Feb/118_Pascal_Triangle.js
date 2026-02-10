//=========== Pascal’s Triangle ============================

// The top starts with 1
// Every row starts and ends with 1
// Every middle number = sum of the two numbers just above it

//        1
//       1 1
//      1 2 1
//     1 3 3 1
//    1 4 6 4 1


var generate = function(numRows) {
  let result = [];   // final Pascal's triangle

  for (let i = 0; i < numRows; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      // first and last element is always 1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // sum of two numbers above
        row.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }

    result.push(row);
  }

  return result;
};

console.log(generate(5))