//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


//Create a function that will accept an array as an input, and it will return the sorted version of that array using the Insertion Sort approach

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] < arr[i - 1]) {
            swap(arr, i, i-1);
            i--;
        }
    }
    return arr;
}

// function insertion(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//             swap(arr, j, j - 1);
//         }
//     }
//     return arr;
// }

console.log(insertion([6, 2, 3, 1, 4, 5]))