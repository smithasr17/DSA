var romanToInt = function(s) {
    const map ={
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }
     total =0
     for(let i=0;i<s.length;i++){
        let current = map[s[i]]    //current = M C M I
        let next = map[s[i+1]]    // next =    C M I V
        if(current<next){
            total -= current  // step2-> total = 0+1000= 1000 , step4-> total = 1900 -1 = 1899
        }else{
            total += current // step1-> total = 1000-100= 900 , step3 -> 900+1000 = 1900,  i=4 -> total + i=4 value = total 
        }
     }
     return total
    
};
console.log(romanToInt("MCMXCIV"))

// IV = 4 (5 − 1)
// IX = 9 (10 − 1)
// XL = 40 (50 − 10)
// CM = 900 (1000 − 100)