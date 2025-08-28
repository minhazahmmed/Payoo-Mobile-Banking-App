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

// function to set inner Text

function setInnerText(value){
  
  const availableBalance = document.getElementById('main-balance');
  availableBalance.innerText = value;
  return availableBalance;
}

// function to handle toogle

function handleToggle(id){
const forms = document.getElementsByClassName("form");
for(const form of forms){
  form.style.display = 'none';
}
 document.getElementById(id).style.display = 'block';
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
  
  setInnerText(sumBalance);

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

 setInnerText(withdrawCalc);
 
})



// Toggling feature----------------------------|

// add money toggle

document.getElementById("add-money-button")
.addEventListener("click", function(){

 handleToggle("add-money-parent")

})

// cash out toggle

document.getElementById("cash-out-button")
.addEventListener("click", function(){

  handleToggle('cash-out-parent');
 
})

// transfer money toggle

document.getElementById('transfer-money-button')
.addEventListener('click', function(){
  handleToggle('transfer-money-parent');
})

// get bonus toggle
document.getElementById('get-bonus-button')
.addEventListener('click', function(){
  handleToggle('get-bonus-parent');
})

//pay bill toggle
document.getElementById('pay-bill-button')
.addEventListener('click', function(){
  handleToggle('pay-bill-parent');
})

//transaction toggle
document.getElementById('transaction-button')
.addEventListener('click', function(){
  handleToggle('transaction-parent');
})