const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + span.error');

zip.addEventListener("input", (e)=>{
  if(!zip.validity.valid)
    zipShowError()
  else {
    zipError.innerHTML = '';
    zipError.className = 'error'
  }
})

function zipShowError(){
  const val = zip.validity  

  if(val.valueMissing)
    zipError.textContent = 'Please insert zip code';

  else if(val.badInput)
    zipError.textContent = 'Please insert a number, not a string or character';

  else if(val.rangeUnderflow)
    zipError.textContent = 'Please insert a number greater than 100000';

  else if(val.rangeOverflow)
    zipError.textContent = 'Please insert a number equal or smaller than 999999';     

}

function zipCleanOrShowError(){
  if(zip.validity.valid){
    zipError.innerHTML = '';
    zipError.className = 'error'
  } else {
    zipShowError();
  }
}