


document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault();
  const bankSelect = document.getElementById('bank').value;
  const accountNumber = document.getElementById('account-number').value;
  const amount = parseInt(document.getElementById('amount').value);
  const pinNumber = document.getElementById('pin-number').value;
 
  const mainBalance = parseInt(document.getElementById('main-balance').innerText);

  const sumBalance = amount + mainBalance;
   
  document.getElementById('main-balance').innerText = sumBalance;

})