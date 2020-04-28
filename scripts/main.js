const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

  e.preventDefault();
  
  countryCleanOrShowError();

  emailCleanOrShowError();

  zipCleanOrShowError();  

  if (country.validity.valid && email.validity.valid && zip.validity.valid){
      alert("Todo bien!");
  }
  
})