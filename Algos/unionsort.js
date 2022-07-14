/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];

const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

const nums3A = [];
const nums3B = [2, 2, 3, 3, 3];
const expected3 = [2, 2, 3, 3, 3];

const nums4A = [2, 2, 3, 3, 3];
const nums4B = [];
const expected4 = [2, 2, 3, 3, 3];

const nums5A = [];
const nums5B = [];
const expected5 = [];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

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

const orderedMultisetUnion = (sortedA, sortedB) => {
    let first = checkKeys(sortedA)
    let second = checkKeys(sortedB)
    
    for (let item in first) {
        if (second.hasOwnProperty(item)) { // Checks if the item exists in the second obj
            if (second[item] >= first[item]) { // If the key value in the second obj is greater than the key value in the first obj, do nothing
                null
            } else { // If the key value in the second obj is less than the key value in the first obj, set the value to the larger value
                second[item] = first[item]
            }
        } // If the item doesn't exist, then we'll just make it here
        second[item] = first[item]
    }
    
    let newAaron = []
    for (item in second) { // 
        while(second[item] > 0) {
            newAaron.push(parseInt(item));
            second[item]--;
        }
    }
    return newAaron
}
console.log(orderedMultisetUnion(nums1A, nums1B))

/*****************************************************************************/