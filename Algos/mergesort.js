function merge(arry1,arry2){
    let result = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arry1.length && index2 < arry2.length) {
        if(arry1[index1] < arry2[index2]) {
            result.push(arry1[index1]);
            index1++;
        } else{
            result.push(arry2[index2]);
            index2++;
        }
    }
    while(index2 < arry2.length) {
        result.push(arry2[index2]);
        index2++;
    }
    while (index1 < arry1.length) {
        result.push(arry1[index1]);
        index1++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length/2)
        let leftHalf = arr.slice(0, mid)
        let rightHalf = arr.slice(mid, arr.length)
        let left = mergeSort(leftHalf)
        let right = mergeSort(rightHalf)
        return merge(left, right)
    } else {
        return arr
    }
}

mergeSort([6,3,8,5,1,2,9]);