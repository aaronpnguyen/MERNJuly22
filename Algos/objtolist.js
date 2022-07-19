/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

//hashmap==python dictionary==javascript object

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const entries = aaronsDoor => {
    let output = []
    for (let parkersKey in aaronsDoor) {
        output.push([parkersKey, aaronsDoor[parkersKey]])
    }
    return output
}

console.log(entries(obj1)) 
