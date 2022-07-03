// 1
var hello;
console.log(hello); // Logs undefined                          
hello = 'world';

// 2
var needle; // Initialized
function test(){ // Hoisted to top
    var needle; // Initialize
    needle = 'magnet'; // Define in scope
    console.log(needle); // Log magnet
}
needle = 'haystack'; // Defined globally
test(); // Logs magnet, which is in test() scope

// 3
var brendan; // Initialized
function print(){ // Hoisted to top
    brendan = 'only okay'; // Redefine in scope
    console.log(brendan); // Console logs 'only okay' in scope
}
brendan = 'super cool'; // Defined globally
console.log(brendan); // Logs global brendan, 'super cool'

// 4
var food; // Initialize
function eat(){ // Hoisted to top
    var food; // Initialize in scope
    food = 'half-chicken'; // Define food in scope
    console.log(food); // Logs 'half-chicken'
    food = 'gone'; // Redfines food in scope
}
food = 'chicken'; // Define globally
console.log(food); // Log global food, 'chicken'
eat(); // Runs function eat(), which logs 'half-chicken;

// 5
mean(); // Function is not defined
var mean; // Initializes mean
mean = function() { // Initializes function
    var food; // Initializes food in scope
    food = "chicken"; // Defines food in scope
    console.log(food); // Logs "chicken"
    food = "fish"; // Redefines food in scope
    console.log(food); // Logs fish
}
console.log(food); // Food cannot be logged as it is not defined globally
console.log(food); // Food cannot be logged as it is not defined globally

// 6
var genre; // Initialize global var genre
function rewind() { // Initalize function rewind()
    var genre; // Initialize var genre
    genre = "rock"; // Define genre in scope
    console.log(genre); // Logs "rock"
    genre = "r&b"; // Redfine genre in scope
    console.log(genre); // Logs "r&b"
}
rewind(); // Calls function rewind()
console.log(genre); // Logs undefined
genre = "disco"; // Defines genre globally
console.log(genre); // Logs "disco"

// 7
function learn() { // Initialize function learn()
    var dojo; // Initialize dojo
    dojo = "seattle"; // Define dojo in scope
    console.log(dojo); // Logs "seattle"
    dojo = "burbank"; // Redfines dojo in scope
    console.log(dojo); // Logs "burbank"
}
var dojo; // Initialize dojo
dojo = "san jose"; // Defines dojo globally
console.log(dojo); // Logs "san jose"
learn(); // Runs function learn()
console.log(dojo); // Logs "san jose

// 8
function makeDojo(name, students){ // Initialize function makeDojo() with parameters name, students
    const dojo = {}; // Initalize object dojo as a const
    dojo.name = name; // Object.name = parameter(name)
    dojo.students = students; // Object.students = parameter(students)
    if(dojo.students > 50){ // Conditional that checks if students > 50
        dojo.hiring = true; // Returns true
    }
    else if(dojo.students <= 0){ // Conditional that checks if stdents <= 0
        dojo = "closed for now"; // Redfines dojo as a string
    }
    return dojo; // Returns dojo
}
console.log(makeDojo("Chicago", 65)); // Returns true because these are used as keys within dojo
console.log(makeDojo("Berkeley", 0)); // Returns as error because dojo cannot be changed from object to string