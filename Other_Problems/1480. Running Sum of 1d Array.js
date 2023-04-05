let nums = [1,2,3,4];

function runningSum (nums){
let result = [],total = 0;
nums.map(i=>{
    total = total+i;
    result.push(total)
})
return result
}

console.log(runningSum(nums));