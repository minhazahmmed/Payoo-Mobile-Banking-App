const validPin = 1234;

// function to get input values
function getInputValueNumber(id){
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;

}

function getInputValue(id){
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get inner text

function getInnerText(id){
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}



// Add money feature

document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault();
  const bankSelect = getInputValue('bank');
  const accountNumber = getInputValue('account-number');
  const amount = getInputValueNumber('amount');
  const pinNumber = getInputValueNumber('pin-number');
 
  const mainBalance = getInnerText("main-balance");

  if(accountNumber.length<11 || accountNumber.length>11){
    alert("Please provide valid account number");
    return;
  }

  if(pinNumber!==validPin){
    alert("Please provide a valid pin number");
    return;
  }

  const sumBalance = amount + mainBalance;
   
  document.getElementById('main-balance').innerText = sumBalance;

})

// Cash out feature
document.getElementById("cash-out-btn")
.addEventListener("click", function(e){
  e.preventDefault();
 const withdrawAmount = getInputValueNumber('withdraw-amount');
 const mainBalance = getInnerText("main-balance");
const agentNumber = getInputValue('agent-number');
const pinNumberCashOut = getInputValueNumber('pin-number-cashout');


const withdrawCalc = mainBalance - withdrawAmount;


if(agentNumber.length<11 || agentNumber.length>11){
  alert("Please provide valid agent number");
  return;
}

if(pinNumberCashOut!==validPin){
    alert("Please provide a valid pin number");
    return;
}

 
if(withdrawCalc < 0){
  alert("Sorry!! You have insufficient balance");
  return;
 }

 document.getElementById("main-balance").innerText = withdrawCalc;
 


  

})

















// Toggling feature

document.getElementById("add-money-button")
.addEventListener("click", function(){
  document.getElementById("cash-out-parent").style.display = 'none';
  document.getElementById("add-money-parent").style.display = 'block';

})

document.getElementById("cash-out-button")
.addEventListener("click", function(){
  document.getElementById("add-money-parent").style.display = 'none';
  document.getElementById("cash-out-parent").style.display = 'block';
 
  
})