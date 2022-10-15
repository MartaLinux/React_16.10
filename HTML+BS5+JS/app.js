var myModal = document.getElementById('exampleModal');
var myInput = document.getElementById('myInput');
var inputEmail = document.getElementById("exampleInputEmail1");
var form = document.getElementById("callback-form");
var output = document.getElementById("output");
var confirmMyModal = document.getElementById("confirm-user")

myModal.addEventListener('shown.bs.modal', function () {
  var modalBody = myModal.querySelector('.modal-body');
  modalBody.textContent = 'Please confirm account creation for ' + inputEmail.value
})
confirmMyModal.addEventListener('click', function () {
   form.classList.add("d-none")
   var outputText = output.querySelector('.text');
   outputText.textContent = 'Hello user '+inputEmail.value;
   output.classList.remove("d-none")
   output.classList.add("d-block")
  })

/*
const SubmitBtn = document.querySelector("callback-form");
const UserEmail = document.querySelector("exampleInputEmail1");
const UserPassword = document.querySelector("exampleInputPassword1");

callbackFrom.addEventListener("submit", function(event){
    event.preventDefault();
    
    
    
    let hasError =false;
    if(!UserEmail.value.trim()){
        UserEmail.classList.add("callback-form-input-error");
        hasError = true;
    }
    else{
        UserEmail.classList.remove("callback-form-input-error");
    }

    if(!UserEmail.value.trim()||!isEmailValid(UserEmail.value)){
        UserEmail.classList.add("callback-form-input-error");
        hasError = true;
    }
    else{
        UserEmail.classList.remove("callback-form-input-error");
    }

    if(!UserPassword.value.trim()){
        UserPassword.classList.add("callback-form-input-error");
        hasError = true;
    }
    else{
        UserPassword.classList.remove("callback-form-input-error");
    }

    if(hasError)
    {
        return;
    }
    callbackRequestRecived.classList.add("modal-active");
})

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
*/