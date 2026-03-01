var lengthOfLongestSubstring = function(s) {

    //Sliding window ==> move forward step by step 

    let max =0;
    let left =0;
    let set = new Set();
    for(let right=0; right< s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]) 
            left ++;
        }
        set.add(s[right]);
        max=Math.max(max,right-left+1)
    }
    return max;
};

const result = lengthOfLongestSubstring("abcabcbb")
console.log(result)