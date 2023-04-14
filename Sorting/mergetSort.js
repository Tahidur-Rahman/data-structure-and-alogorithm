let arr = [20,5,40,60,10,1];

function mergeSort(arr,left,right){
    if(left>right){
        return;
    }
    let mid = Math.floor((left+right)/2);

    mergeSort(arr,left,mid) //left
    mergeSort(arr,mid+1,right) //right

    merge(arr,left,mid,right);
}


function merge(arr,left,mid,right){
    let newArr = [];
    
}