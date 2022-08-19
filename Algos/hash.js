/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

const hash = str => {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        let letter = "", num = ""
        if (isNaN(str[i])) {
            letter = str[i]
            i++
        }
        while (!isNaN(str[i])) {
            num += str[i]
            i++
        }
        i--
        let parse = parseInt(num)
        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = parse
        } else {
            obj[letter] += parse
        }
    }

    let result = ""
    let output = Object.keys(obj).sort()

    for (let i = 0; i < output.length; i++) {
        result += output[i]
        result += obj[output[i]]
    }
    return result
}

console.log(hash(str1))