var countBinarySubstrings = function (s) {
  // Consecutive --> Group of same Characters
  //eg: "0011" correct     "0101" --> Wrong
  let prevCount = 0; // group of size is 0 because previous group is not there
  let currCount = 1; // group of size is 1
  let res = 0; // initialy no substring

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currCount++;
    } else {
      res += Math.min(prevCount, currCount);
      prevCount = currCount;
      currCount = 1;
    }
  }
  res += Math.min(prevCount, currCount);
  return res;
};

const subString = countBinarySubstrings("00110011");
console.log(subString);

