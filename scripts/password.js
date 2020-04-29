const password = document.querySelector('#password')
const passwordRepeat = document.querySelector('#password-repeat')
const passwordError = document.querySelector('#password + span.error');
const passwordRepeatError = document.querySelector('#password-repeat + span.error');


password.addEventListener("input", (e)=>{  
  PasswordCleanOrShowError();
})
passwordRepeat.addEventListener("input", (e)=>{ 
  PasswordRepeatCleanOrShowError()
})

function PasswordCleanOrShowError(){   
  if(!password.validity.valid)
    passwordShowError()
  else{
    passwordError.innerHTML = '';
    passwordError.className = 'error'
  }   
}

function PasswordRepeatCleanOrShowError(){ 


  if (passwordRepeat.value == password.value){
    passwordRepeat.validity.passwordsDontMatch = false;  
    passwordRepeat.valid = true
  }else{
    passwordRepeat.validity.passwordsDontMatch = true;  
    passwordRepeat.valid = false
  }  

  if(!passwordRepeat.valid )
    passwordRepeatShowError()
  else{
    passwordRepeatError.innerHTML = '';
    passwordRepeatError.className = 'error'
  } 
}

function passwordShowError(){  
  
  if (password.valid){
    passwordError.textContent = '';
  }else if(password.validity.valueMissing) {
    passwordError.textContent = 'Plese type your password.';
  } else if(password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${ password.minLength } characters; you entered ${ password.value.length }.`;
  } else if(password.validity.patternMismatch) {
    passwordError.textContent = 'Password should cointain numbers and letters.';  
  } 
  passwordError.className = 'error active';
}

function passwordRepeatShowError(){  
  if(passwordRepeat.validity.valueMissing) {
    passwordRepeatError.textContent = 'Plese repeat the password typed above.';
  } else if (passwordRepeat.validity.passwordsDontMatch){
    passwordRepeatError.textContent = 'Passwords dont match';
  }
  passwordRepeatError.className = 'error active'
}