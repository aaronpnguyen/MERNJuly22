const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

const entries = data => {
    let output = [];
    for (let key in data) {
        output.push([key, data[key]]);
    }
    return output;
}

const interpolation = param => {
    let data = entries(param)
    strInsert = "", strValues = ""

    for (let i = 0; i < data.length; i++) {
        strInsert += data[i][0]
        
        if (typeof data[i][1] == "string") {
            strValues += `"${data[i][1]}"`
        } else {
            strValues += data[i][1]
        }

        if (i != data.length-1) {
            strInsert += ", "
            strValues += ", "
        }
    }

    return (`INSERT INTO users (${strInsert}) VALUES (${strValues});`)
}

function insert(obj){
    let keys = [];
    let values = [];
    for(let property in obj){
        keys.push(property)
        values.push(obj[property])
    }
    return `INSERT INTO users (${keys}) VALUES (${values})`
}
console.log(insert(insertData2))

console.log(interpolation(insertData2))