const calcSumBtn = document.querySelector('#calculator button');

function calcSum () {
const userNumInput = document.getElementById('user-number');
const inputedNumber = userNumInput.value;

let addUptoNum = 0

for (let i = 0; i <= inputedNumber; i++){
     addUptoNum = addUptoNum + i;
}

const resultOutput = document.getElementById('calculated-sum');

resultOutput.textContent = addUptoNum;
resultOutput.style.display = 'block';
}

calcSumBtn.addEventListener('click', calcSum);

// Highlighted links

const highlightedLink = document.querySelector('#highlight-links button');

function highlightLinks () {
    let anchorTags = document.querySelectorAll('#highlight-links a');

    for (const anchorTag of anchorTags) {
        anchorTag.classList.add('highlight');
    }
}

highlightedLink.addEventListener('click', highlightLinks);

// DISPLAY DATA

const demoUserData = {

    fullName: 'Aishat Adewoyin',
    phoneNumber: +2347067564895,
    age: 30,
    height: 160
}

const displayDemoUserDataBtn = document.querySelector('#user-data button');

function displayUserData (event) {
    const outputData = document.getElementById('output-user-data');

    outputData.innerHTML = ' ';

    for (const key in demoUserData) {
        const newUserDataList = document.createElement('li');

        const textOutput = key.toUpperCase() + ': ' + demoUserData[key];

        newUserDataList.textContent = textOutput;
        outputData.append(newUserDataList);
    }
}

displayDemoUserDataBtn.addEventListener('click', displayUserData);

// ROLL THE DICE

