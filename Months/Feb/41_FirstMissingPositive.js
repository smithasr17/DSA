var  firstMissingpositive = function(nums){
      nums.sort((a,b)=>a-b);

    let i=0,j=1
    while(i<nums.length){
        if(nums[i]<=0 || nums[i]<j){
        i++
    }
    else if(nums[i]===j){
            j+=1;
            i++;
        }
        else{
            return j;
        }
    }
    return j;
}

console.log(firstMissingpositive([11,9,7,12,8]))




//If the function returns negative → a comes before b
//If it returns positive → b comes before a
//If it returns 0 → order doesn’t change

//We start from 1 because: 1 is the smallest positive integer

//“Start checking from the first index of the array  , i=0 ”

//i = 0 → walking through the array
// j = 1 → what number we EXPECT