// alert("ola")

// console.log("this is our first log");

// document.write("this is our first doc write")


// Variables ცვლადები

var income = 100



// string : წარმოადგენს სტრიქონს (ტექსტი)
var companyName = "Apple"

// number : რიცხვითი მნიშვნელობა
// var x = 45
// var y = 23.84

// boolean: ლოგიკური მნიშვნელობა true ან false
var isAlive = true
var isDead = false

// undefined : მიუთითებს რო მნიშვნელობა არ აქვს მინიჭებული
// null : მიუთითებს განუსაზღვრელ მნიშვნელობას
var isNull = null





var xNumber = typeof 20




// მათემატიკური ოპერაციები

// var x = 41
// var y = 7 
// var z = x % y
// console.log(z);


// var x = 10
// var y = 5 + (6-3) * --x
// console.log(y);


// შედარების ოპერატორები


var income = 100
var strIncome = "100"

var result = income == strIncome // ture 
var result2 = income === strIncome // false 

// console.log(result);
// console.log(result2);

// ლოგიკური ოპერაციები

var percent = 10

var result3 = income>50 && percent < 12

// console.log(result3); // true


var income = 100
var deposit = true

var result = income > 50 && !deposit == false
// console.log(result);



var name = "giorgi"

var lastName = "Apkhadze"

var fullName = name + " " + lastName

// console.log(fullName);


var number1 = "50"
var number2 = "30"

var result = parseInt(number1)  + parseInt(number2)

// console.log(result);





// var strSum = prompt("შეიყვანეთ ანაბრის თანხა", 100)
// var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი" , 10)

// var sum =  parseInt(strSum)
// var percent = parseInt(strPercent)

// sum = sum + sum * percent/100

// alert("პროცენტის დარიცხვის შემდეგ ანარბის თანხა იქნება" + " " + sum)



// var people = ["tom", "alice", "sam"]

// console.table(people);

// people[2] = "lasha"
// console.log(people[2]);



var number1 = [0,1,2,3,4,5] // ერთგანზომილებიანი მასივი

var numbers2 =[[0,1,2] , [3,4,5]] // ორგანზომილებიანი მასივი

// console.table(number1);
// console.table(numbers2);



var people = [
    ["Tom", 25, false],
    ["Bill", 38, true],
    ["Alice", 21, false]
]

