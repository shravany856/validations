let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let submit = document.getElementById('btn');
let messageDiv1= document.getElementById('message1');
let messageDiv2= document.getElementById('message2');
let messageDiv = document.getElementById('message');

emailInput.addEventListener('change', validate)
passwordInput.addEventListener('change', validate)



function validate(){



let email = emailInput.value;
let password = passwordInput.value;
let emailtemp= true;
let passwordtemp= true;

console.log("email: ",email)
if(email == "" || !email.includes("@") || !email.includes(".")){
    console.log("avd")
    messageDiv1.innerText ="Make sure email is more than 3 characters and has @ and a . ";
    emailtemp = false;
    messageDiv1.style.color= "red";
}

if(password == "" || password <= 8){
    console.log("dfr")
    messageDiv2.innerText = "Make sure password is more than 8 characters";
    passwordtemp =  false;
    messageDiv2.style.color = "red";
}
// const div =  document.querySelector('div');
// div.classList.remove('info');


if(emailtemp && passwordtemp){
    console.log("All good to go");
    messageDiv.innerText = "Email or Password are valid";
    messageDiv.style.color ="green";
    if(confirm('are you sure to confirm')){
        alert('successfull signup');
    }
    else{
        window.location.reload()
    }
}



}
