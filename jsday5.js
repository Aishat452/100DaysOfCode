// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice

let myDoc = document.body.children[0];

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
myDoc = document.body;
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
myDoc = document.body.children[1];
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
let myNewDoc = (document.getElementById("head").innerHTML = "Hello I'm Aishat");
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
let pQuery = (document.querySelector(".para").innerHTML =
  "Welcom to Aisha's website");
let newLink = document.getElementById("link");
//  giving new text to the anchor tag
newLink.textContent = "Hi! Click here to visit the next page";
//  giving new link to the anchor tag
newLink.href = "https://google.com";
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

console.dir(myDoc);
console.log(newLink);
