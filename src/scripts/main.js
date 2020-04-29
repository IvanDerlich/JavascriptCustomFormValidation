/* eslint-disable no-undef */
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

  e.preventDefault();
  
  countryCleanOrShowError();

  emailCleanOrShowError(); 

  zipCleanOrShowError();  

  PasswordCleanOrShowError();

  PasswordRepeatCleanOrShowError();

  if (country.validity.valid && 
    email.validity.valid && 
    zip.validity.valid && 
    password.validity.valid && 
    passwordRepeat.validity.valid){
      alert("Todo bien!");
  }
  
})