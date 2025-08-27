
// Login Button functionality

document.getElementById("loginButton")
.addEventListener("click",function(e){
    e.preventDefault();
const mobileNumber = 12345678910;
 const mobileNumberValue = document.getElementById("mobileNumber").value;
const mobileNumberValueConverted = parseInt(mobileNumberValue);

const pinNumber = 1234;
const pinNumbervalue = document.getElementById('pinNumber').value;
const pinNumberValueConverted = parseInt(pinNumbervalue);

if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber){
    window.location.href="home.html";
}
else{
    alert("Invalid Credentials");
}
})


