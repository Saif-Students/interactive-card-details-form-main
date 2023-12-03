// inputs
let CardholderName = document.querySelector('#CardholderName');
let number = document.querySelector('#number');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let cvc = document.querySelector('#cvc');

// error texts
let cvcError = document.querySelector('#cvcError');
let dateError = document.querySelector('#dateError');
let numberError = document.querySelector('#numberError');
let nameError = document.querySelector('#nameError');


// button
let confirm = document.querySelector('#confirm');


// right container

let right = document.querySelector('.right');

function hasAlphabets(inputString) {
   // Regular expression to match any alphabet character (case-insensitive)
   var regex = /[a-zA-Z]/;

   // Test if the inputString contains at least one alphabet character
   return regex.test(inputString);
}


confirm.addEventListener('click', (e)=>{
e.preventDefault()
   if(CardholderName.value === ""){
    nameError.innerHTML = "Please Enter your name!"
    CardholderName.classList.add('error')
   }
   if(hasAlphabets(number.value)){
      number.classList.add('error')

      numberError.innerHTML = "Wrong format, number only";
   }
   if(number.value === ""){
      number.classList.add('error')

      dateError.innerHTML ="Can't be blank"
   }
   if(month.value === "" || year.value === ""){
      dateError.innerHTML ="Can't be blank"

   }
   if(month.value === ""){
      month.classList.add('error')

   }
   if(year.value === ""){
      year.classList.add('error')

   }
   if(cvc.value === ""){
      cvcError.innerHTML ="Can't be blank"

      cvc.classList.add('error')

   }
   if((CardholderName.value !== "") && (number.value !== "") && (month.value !== "") && (year.value !== "") && (cvc.value !== "")){
      right.innerHTML = ""
      let myCompleteDiv = document.createElement('div');
      myCompleteDiv.classList.add('myCompleteDiv')
      myCompleteDiv.innerHTML = `
      <img id="tickMark" src="./images/icon-complete.svg" alt="">
      <h2>THANK YOU</h2>
      <p id="completeMSSG">We've added your card details</p>
      `

      right.appendChild(myCompleteDiv)

   }
})

