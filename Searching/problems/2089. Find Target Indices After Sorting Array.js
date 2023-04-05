let nums = [48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38],
  target = 15;

function targetIndices(nums, target) {
  let result = [];
  nums.sort((a,b)=>a-b).map((item, index) => {
    if (item == target) {
      result.push(index)
    }
  });
  return result;
}

console.log(targetIndices(nums, target));
