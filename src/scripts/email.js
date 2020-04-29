const email = document.querySelector("input[type='email']")
const emailError = document.querySelector('#email + span.error');

email.addEventListener("input", () =>{
  emailCleanOrShowError()
})

function emailShowError(){
  
  if(email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }
  emailError.className = 'error active';
}

function emailCleanOrShowError(){
  if (email.validity.valid){
    emailError.innerHTML = ''
    emailError.className = 'error'
  } else {
    emailShowError();    
  }
}