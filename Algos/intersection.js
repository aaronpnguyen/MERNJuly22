const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];

// function orderedIntersection(sortedA, sortedB) {

//     function checkKeys(arr) {
//         let obj = {};
//         for (let i = 0; i < arr.length; i++) {
//             if (!obj[arr[i]]) {
//                 obj[arr[i]] = 1;
//             } else {
//                 obj[arr[i]] += 1;
//             }
//         }
//         return obj;
//     }
  
//     let first = checkKeys(sortedA)
//     let second = checkKeys(sortedB)
  
//     let newArr = []
//     for(let item in first) {
//         if(second.hasOwnProperty(item)) {
//             newArr.push(parseInt(item))
//         }
//     }
//     return newArr;
// }

// console.log(orderedIntersection(numsA1, numsB1))

const orderedIntersection = (sortedA, sortedB) => {
    const checkKeys = (arr) => {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            if (!obj[arr[i]]) {
                obj[arr[i]] = 1;
            } else {
                obj[arr[i]] += 1;
            }
        }
        return obj;
    }
  
    let first = checkKeys(sortedA)
    let second = checkKeys(sortedB)
  
    let newArr = []
    for(let item in first) {
        if(second.hasOwnProperty(item)) {
            newArr.push(parseInt(item))
        }
    }
    return newArr
}

console.log(orderedIntersection(numsA1, numsB1))