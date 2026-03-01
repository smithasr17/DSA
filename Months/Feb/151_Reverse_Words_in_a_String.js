var reverseWords = function(s) {
    return s
           .trim()          // remove leading & trailing spaces
           .split(/\s+/)    //  split by one or more spaces
           .reverse()       // reverse the words
           .join(" ")        // join with single space
}
const reverse = reverseWords("the sky is blue")
console.log(reverse)