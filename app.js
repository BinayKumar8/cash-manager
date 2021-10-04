var bill = document.querySelector("#bill-amount");
var cash = document.querySelector("#cash-given");
var btnCheck = document.querySelector("#btn-check");
var textMessage = document.querySelector("#show-msg");
var noNotes = document.querySelectorAll(".no-of-notes");

// document.getElementById("btn-check").style.visibility = "hidden";
const availableNote = [500,200,100,50,10,5,1];

btnCheck.addEventListener("click", totalBillAndCash);

function totalBillAndCash() {
    if(bill.value >  0) {
        console.log("working");
        if(cash.value == bill.value) {
            showMessage(`HAHAHA!! you want 0`);
        } else if(cash.value > bill.value) {
            const returnAmount = cash.value - bill.value; 
            calculateChange(returnAmount);
        }  else if(bill.value > cash.value) {
            console.log("working else");
            showMessage(`You Have To Pay More`);
        }
    }
}

function calculateChange(returnAmount) {
    for (let i = 0; i < availableNote.length; i++) {
        const numberOfNotes = Math.trunc(returnAmount / availableNote[i]);
        returnAmount = returnAmount % availableNote[i];
        noNotes[i].innerText = numberOfNotes;
      }
}
  
function showMessage(msg) {
    textMessage.innerHTML = msg;
}