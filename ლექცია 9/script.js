// if(პირობა) მოქმედება

var income = 100 
var age = 19

if (income < 150 && age > 18) {
    var message = ("good income")
    console.log(message);
}




var myVar = 90

if (myVar) {  // მნიშვნელობა გააჩნია თუ არა
    // მოქმედება
}


var age = 17 

if (age > 18) {
    console.log("u can go drink");
} else {
    console.log("u cant drink yet"); 
}

//  nested if else

var income = 500 
if (income < 200) {
    console.log("below avarage salary");
} else if (income >= 200 && income <= 400) {
    console.log("avarage salary");
}else {
    console.log("pretty good salary");
}

// switch case
var income = 300 

switch (income) {
    case 100 : console.log("income is 100$");
    break;
    case 200 : console.log("icome is 200$");
    break;
    case 300 : console.log("icome is 300$");
    break;
}



var a = 1
var b = 2
// turner operator
var result = a < b ? a + b: a - b 
// same as above result
if (a < b) {
    a + b 
} else {
    a-b
}



//for

// for ([მრიცხველის ინიციალიზაცია]; [პირობა]; მრიცხველის შეცვლა) {
//     // მოქმედებები
// }

var people = ["Tom", "Alice", "Bob", "Sam"]

for (var i = 0; i<people.length; i++){
    // document.write(people[i] + "<br>")
}



//for in
// for (ინდექსი in მასივი) {
    // მოქმედებები
// }

var people = ["Tom", "Alice", "Bob", "Sam"]

for (var index in people){
    // document.write(people[index] + "<br>")
}

// while

// while (პირობა) {
//     // მოქმედებები
// }

var people = ["Tom", "Alice", "Bob", "Sam"]

var index = 0

while (index < people.length) {
    document.write(people[index] + "<br>")
    index ++;
}


// do while



var x = 1

do{
    document.write(x * x + "<br>")
    x++;
} while (x < 10)




var fruits = ["apple", "banana", "orange"]

fruits.forEach((element) => console.log(element))

fruits.map((element) => console.log(element))




// Functions

// function ფუნქციის_სახელი([პარამეტრი]) {
//     // ინსტრუქციები
//}


function display() {
    document.write("This is our first function")
}