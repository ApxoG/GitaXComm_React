// // function display() {
// //     document.write("This is our first function")
// // }

// // display()



// // var anonymusFunction = function() {
// //     document.write("Js Functiosn")
// // }

// // anonymusFunction()




// // function goodMorning() {
// //     document.write("Good morning")
// // }

// // function goodEvning() {
// //     document.write("Good Evning")
// // }


// // var message = goodMorning

// // message()

// // message = goodEvning

// // message()




// // Function Params

// function display(x) {
//     var z = x * x
//     document.write(x + "square equals" + z )
// }


// display(5)



// function display2(x,y){

//     if (y === undefined) {
//         y = x
//     }

//     var z = x * y
//     console.log(z);

// }
// display2(6)



// var numArr = [1,2,3,4,5,6]


// function calculate (x) {
//     var result = x * x
//     console.log(result);
// }

// numArr.forEach((element) => calculate(element))



// var y =5
// var z = square(y)

// // document.write(y + "square" + z)

// function square(x){
//     return x * x
// }




function displayMessage (x, welcomeMessage) {
    var message = welcomeMessage(x)
    // document.write(message)
}

function welcomeMessage(time) {
    if (time < 12) {
        return "good morning"
    } else {
        return "Good evning"
    }
}


displayMessage(13, welcomeMessage)





// var x = 5

// function displaySquare() {
//     var z = x * x
//     console.log(z);
// }
// displaySquare()



let z = 90

const rame =90

function displaySquare() {
    const z = 10
    // console.log(z);
}

displaySquare()




function getFactorial(n) {
    if (n === 1) {
        return 1 ;
    } else {
        return n * getFactorial(n-1)
    }
}

const result = getFactorial(4)
// console.log(result);




////    Rock paper scissors


// function to get Computers chose
    function getComputerChose(){
        const choices = ["rock", "paper", "scissors"]
        const randomIndex = Math.floor(Math.random() * choices.length)
        return choices[randomIndex]
    }

    function calculateWinner(playerChose, computersChoice) {
        playerChose = playerChose.toLowerCase();

        if(playerChose === computersChoice) {
            return "its a tie, You both close" + " " + playerChose
        }

        if (
            (playerChose === "rock" && computersChoice === "scissors") ||
            (playerChose === "paper" && computersChoice === "rock") ||
            (playerChose === "scissors" && computersChoice === "paper")
        ) {
             return "You win! " +  playerChose + " beats " + computersChoice
        } else {
            return "You lose! " + computersChoice + " beats " + playerChose
        }
    }
// Function to start the game
    function startGame() {
        const playerChose = prompt("choose: rock, paper, scissors");
        const computersChoice = getComputerChose()
        alert("Computer chose :"  + computersChoice)
       alert( calculateWinner(playerChose, computersChoice))
    }
    // Run game
    startGame()