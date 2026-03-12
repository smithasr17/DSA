function isHappy(n) {
    const set = new Set()

    while(n!==1){
       if(set.has(n)){
        return false
    }
         set.add(n)
        n = getSumOfSquares(n)
}
return true
}

function getSumOfSquares(n){
    let sum =0 

    while(n > 0){
        let digit = n % 10
        sum += digit * digit
        n = Math.floor(n / 10)
    }
    return sum
}

const result = isHappy(19)
console.log(result)