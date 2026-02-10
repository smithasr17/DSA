function isPalindrome(s){
    let res =""
    s=s.toLowerCase()  // convert string into lowercase

    for(let i=0; i<s.length;i++){
       if(s[i]>='a' && s[i]<='z' || s[i]>='0' && s[i]<='9'){  
        // i am considering only alphbets and numbers if any space,symbols is there just ignore it
        res += s[i]   // adding each letter into res
       }
    }

    let left =0, right =res.length-1 
    // instead of string length i am taking res length because we are storing the letters inside res based on the condition it should not include space and symbols 
    while(left<right){
        if(res[left] !== res[right]){
            return false
        }
        else{
            return true
        }
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))