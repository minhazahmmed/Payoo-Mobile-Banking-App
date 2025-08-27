// Add money feature
const validPin = 1234;
document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault();
  const bankSelect = document.getElementById('bank').value;
  const accountNumber = document.getElementById('account-number').value;
  const amount = parseInt(document.getElementById('amount').value);
  const pinNumber = parseInt(document.getElementById('pin-number').value);
 
  const mainBalance = parseInt(document.getElementById('main-balance').innerText);

  if(accountNumber.length<11){
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
 const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
 const mainBalance = parseInt(document.getElementById('main-balance').innerText);
const agentNumber = document.getElementById("agent-number").value;
const pinNumberCashOut = parseInt(document.getElementById('pin-number-cashout').value);

if(agentNumber.length<11){
  alert("Please provide valid agent number");
  return;
}

if(pinNumberCashOut!==validPin){
    alert("Please provide a valid pin number");
    return;
}

 

 const withdrawCalc = mainBalance - withdrawAmount;

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