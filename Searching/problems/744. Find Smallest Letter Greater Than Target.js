var nextGreatestLetter = function(letters, target) {
    let start = 0,
    end = letters.length-1,
    mid= Math.floor((start+end)/2);
    while(start < end){
        if(letters[mid]===target){
            if(letters[mid] == letters[mid+1]){
                start = mid+2
            }else{
                return letters[mid+1]
            }
        }else if(letters[mid]<target){
            start= mid+1
        }else{
            end = mid;
        }
        mid = Math.floor((start+end)/2);
    }
    if(letters[mid] <= target){
        return letters[0]
    }else{
        return letters[mid]
    }
};

console.log(nextGreatestLetter(["c","f","j"],"a"))