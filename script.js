alert("Group 1 RULES");

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



let timer = document.querySelector('h3')
let startingTime = 30
let startTimer;
let startStopTimer = () => {
  if(startTimer){
    clearInterval(startTimer);
    timer.innerHTML = '00:30'
    startingTime = 30
    return startTimer = undefined
  }else{
    return startTimer = setInterval(()=>{
      timer.innerHTML = `00:0${startingTime--}`
    }, 1000)
  }
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
