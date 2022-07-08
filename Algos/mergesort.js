function merge(arry1,arry2){
    let result = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arry1.length && index2 < arry2.length) {
        if (arry1[index1] < arry2[index2]) {
            result.push(arry1[index1]);
            index1++;
        } else {
            result.push(arry2[index2]);
            index2++;
        }
    }
    while (index2 < arry2.length) {
        result.push(arry2[index2]);
        index2++;
    }
    while (index1 < arry1.length) {
        result.push(arry1[index1]);
        index1++;
    }
    return result;
}
  
function mergeSort(arr, arr2 = [], ) {
    if (arr.length <= 1) {
        return arr
    } else {
        arr.splice(i, Math.ceil(arr.length / 2))

    }

    while () {

    }
}


console.log(mergeSort([5, 3, 4, 2, 1, 6, 7]))

// Divide arr into 2 until we hit 1 element