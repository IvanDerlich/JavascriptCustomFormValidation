const form = document.querySelector("form")
const email = document.querySelector("input[type='email']")
const emailError = document.querySelector('#email + span.error');

const country = document.querySelector("select")
const countryError = document.querySelector('select + span.error');
console.log(countryError);

form.addEventListener("submit",(e)=>{

  if (country.validity.valid){
    countryError.innerHTML = ''
    countryError.className = 'error'
  } else {
    countryShowError();
  }

  if(email.validity.valid){
    emailError.innerHTML = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    emailShowError()
  }
  e.preventDefault();
})

email.addEventListener("input", (e) =>{
  if(!email.validity.valid)
    emailShowError()
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


function countryShowError(){
  if(country.validity.valueMissing)
    countryError.textContent = "Please select a country";  
}
