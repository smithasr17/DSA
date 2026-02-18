var hasAlternatingBits = function(n) {
    let arr =[]

    while(n!== 0){
        let temp =0
        temp = n%2
        arr.push(temp)
        n= Math.floor(n/2)
    }
    arr.reverse(n)

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] === arr[i+1]){
            return false
        }
    }
    return true
}

let binary = hasAlternatingBits(11)
console.log(binary)