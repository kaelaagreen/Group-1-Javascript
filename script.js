alert("Group 1 RULES");

var myTimer; 
function clock() {
    myTimer = setInterval(myClock, 1000);
    var i = 30;

    function myClock() {
        document.getElementById("demo").innerHTML = i--;
        if (i == 0) {
          clearInterval(myTimer);
          alert("Reached zero");
        }
      }
    }
