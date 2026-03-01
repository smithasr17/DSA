var twoSum = function(numbers, target) {
    let n = numbers.length
    let left =0
    let right = n-1
    let sum =0

    while(left<right){
        sum = numbers[left] + numbers[right]
        if(sum===target){
            return [left+1 , right+1]
        }else if(sum<target){
            left++
        }else{
            right--
        }
            
        }
        return [-1, -1]
}
const sum = twoSum([2,7,11,15], 9)
console.log(sum)