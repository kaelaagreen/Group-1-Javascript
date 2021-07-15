alert("Group 1 RULES");



let cardFronts = document.querySelectorAll(".card_front");

let cardBacks = document.querySelectorAll(".card_bottom");

let cardsArray = document.querySelectorAll(".card");

let hasFlipped = false; // checking if cards have been flipped or not before deciding if it is a match or not

let firstCard, secondCard; // <-- sets empty variables that will be assigned a value after our "flip" function runs.

let lockBoard = false; // variable for locking board after cards have flipped. Player cannot select more than 2 cards at a time


let closeButton = document.querySelector("span");
let modal = document.querySelector(".modal");

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// var timer = document.querySelector('h3')
// var startingTime = 60
// var startTimer;
// var timeout;
// var startStopTimer = () => {

// if(startTimer){
//     resetBoard();
//     clearInterval(startTimer);
//     clearTimeout(timeout);
//     timer.innerHTML = '1:00';

//   }else{
    
//     timeout = setTimeout(() => {
//         clearInterval(startTimer);
//         alert("Time's Up!");
//     }, 61000)
//     return startTimer = setInterval(()=>{
//       timer.innerHTML = `00:${--startingTime}`
//     }, 1000)
//     ;
// }
// }

var timerText = document.querySelector('h3');
var startingTime = 59;
var timeout;
var timerOn = 0;

function startTimer () {
    timerText.innerHTML = `00:${startingTime}`;
    startingTime = startingTime -1;
    timeout = setTimeout(startTimer, 1000);

    if (startingTime == -2) {
        stopTimer();
        alert("Time is up");
    }
}

function timerIsOn () {
    if (!timerOn) {
        timerOn = 1;
        startTimer()
    }
}

function stopTimer () {
    clearTimeout(timeout);
    timerOn = 0;
    startingTime = 59;
    timerText.innerHTML = `01:00`;
}




function shuffleCards () {
    cardsArray.forEach(card => {
        let random = Math.floor(Math.random() * 16);
        card.style.order = random;
        console.log(random)
    })
    
}

shuffleCards();





cardsArray.forEach(card => card.addEventListener("click", flipCard));
// uses classList to toggle a css class onto each card inside our .card array






function flipCard() {
    // console.log(this); //checks value for "this"
    if (lockBoard === true) {
        return;
    }

    // makes sure first card cannot be double clicked, taking both firstCard and secondCard place
    if (this === firstCard) {
        return;
    }

    this.classList.toggle("flip");

    if (hasFlipped === false) {
        // this condition means it is before the first click
        hasFlipped = true; // re-assigning value to "true" because a card has been clicked
        firstCard = this;
        // console.log(hasFlipped, firstCard) <-- we can check if it works. Whenn we click a second card, it will not work because the "false" condition can no longer be met.
    } else {
        hasFlipped = false; // hasFlipped resets to false
        secondCard = this; // second card will automatically be assigned here

        checkMatch(); // call on check for match function
    };
 
};







function checkMatch () {
    if (firstCard.dataset.name === secondCard.dataset.name) { 
     
        removeCard();// if there's a match, remove both cards

    } else {

       unflipCards(); // if there's no match, call unflip cards functions

    };

    // could also use ternary operator here.


};





var removedCards = [];

function removeCard () {
    
    lockBoard = true; 
     setTimeout( () => {
        firstCard.style.visibility = "hidden";
        secondCard.style.visibility = "hidden";

        removedCards.push(firstCard);
        removedCards.push(secondCard);
        console.log(removedCards);
 
        lockBoard = false;
        hasFlipped = false;
     }, 600);
    

};


function unflipCards () {
     // no match
    lockBoard = true; // re-assign value to true if cards are flipped

     setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        lockBoard = false;
        hasFlipped = false; // re-assign to false, to reset board
        
    }, 1500); // use setTimeout to allow second card to be able to flip still
    
};






// What is the setInterval() in relation with the clearInterval() method and how it works together?
//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).  
//The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
// ~~declaring variables that will be used again.~~


function resetBoard () {
    cardsArray.forEach(card => card.style.visibility = "visible");
    cardsArray.forEach(card => card.classList.remove("flip"));
    shuffleCards();
}

//Misc notes: 

// var myTimer; 
// function clock() {
//     myTimer = setInterval(myClock, 1000);
//     var i = 30;

//     function myClock() {
//         document.getElementById("demo").innerHTML = i--;
//         if (i == 0) {
//           clearInterval(myTimer);
//           alert("Reached zero");
//         }
//       }
//     }


