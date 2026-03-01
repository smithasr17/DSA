var isPalindrome = function(x) {
    if(x<0)   return false// negative numbers can't be palindrome
    let original = x
     var  rev = 0 

   while(x>0){
    let digit =x % 10;  // get last digit
    rev = rev * 10 + digit // build reversed number
    x = Math.floor(x/10) // remove last digit
   } 
   return original === rev // true or false
};

const result = isPalindrome(121)
console.log(result)