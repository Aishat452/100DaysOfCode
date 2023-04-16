// PRACTICE
// 

let par = document.querySelector('p');

// changing content when the paragraph is clicked

// creating a function to be used in the eventListener

function paraChange (event) {
    par.textContent = 'Clicked';
}

// calling event listener

par.addEventListener('click', paraChange);


// EXCERSICE FOR THE INPUT SECTION (EVENTLISTENER)

// calling the input element

let inputElement = document.getElementById('inputElement');

// creating function for the inputed texts to be placed into the event listener

function inputFunc (event) {
   let inputValue = inputElement.value;

   console.log(inputValue);
}

// creating the event listener

inputElement.addEventListener('input', inputFunc);