let firstButton = document.querySelector(".firstButton");

let secondButton = document.getElementById("secondButton");

const firstParagraph = document.querySelector('.thirdPara');

// const thirdParagraph = document.body.section.children[2].children[3];
const thirdParagraph = firstParagraph.nextElementSibling.nextElementSibling; 

function buttonClickRemove(event) {
    thirdParagraph.remove();
}

//   function buttonChangeBgColor(event) {
//     firstParagraph.style.backgroundColor = 'blue';
// }


function buttonChangeBgColor(event) {
    firstParagraph.classList.add('blueBg');
}



firstButton.addEventListener("click", buttonClickRemove);
secondButton.addEventListener("click", buttonChangeBgColor);
