const country = document.querySelector("select")
const countryError = document.querySelector('select + span.error');

country.addEventListener("input",()=>{
  countryCleanOrShowError()
})

const countryShowError = () => {
  if(country.validity.valueMissing)
    countryError.textContent = "Please select a country";  
  
  countryError.className = 'error active';
}

const countryCleanOrShowError = () => {
  if (country.validity.valid){
    countryError.innerHTML = ''
    countryError.className = 'error'
  } else {
    countryShowError();    
  }
}