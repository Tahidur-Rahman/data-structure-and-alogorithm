let arr = [3,0,1];

function findMissingNum(nums) {
 let total = 0,current = 0;
 for(let i = 0;i<=nums.length;i++){
    total = total + i;
 }
 nums.map(i=>current= current+i)
 return total-current;
}


console.log(findMissingNum(arr));
