{

const buttonThree = document.getElementById('projectButtonc');
const buttonFour = document.getElementById('projectButtond');
}

{

const pushIt = setInterval (function() {
let buttonOne = document.getElementById("projectButtona");
const parentOne = document.getElementById("card a");





    if (parentOne.matches('[data-value="inview-top"]') || parentOne.matches('[data-value="inview-bottom"]')) {
      buttonOne.classList.add("seeButton");
      buttonOne.classList.remove("projectButton");
    } else if (parentOne.matches('[data-value="outview-bottom"]') || parentOne.matches('[data-value="outview-top"]')) {
      buttonOne.classList.remove("seeButton");
      buttonOne.classList.add("projectButton");
    }

}, 3);
}

{

const pushItAgain = setInterval (function() {
const buttonOne = document.getElementById('projectButtonb');
const parentOne = document.getElementById("card b");





    if (parentOne.matches('[data-value="inview-top"]') || parentOne.matches('[data-value="inview-bottom"]')) {
      buttonOne.classList.add("seeButton");
      buttonOne.classList.remove("projectButton");
    } else if (parentOne.matches('[data-value="outview-bottom"]') || parentOne.matches('[data-value="outview-top"]')) {
      buttonOne.classList.remove("seeButton");
      buttonOne.classList.add("projectButton");
    }

}, 3);
}

{

const pushItAgain = setInterval (function() {
const buttonOne = document.getElementById('projectButtonc');
const parentOne = document.getElementById("card c");



    

    if (parentOne.matches('[data-value="inview-top"]') || parentOne.matches('[data-value="inview-bottom"]')) {
      buttonOne.classList.add("seeButton");
      buttonOne.classList.remove("projectButton");
    } else if (parentOne.matches('[data-value="outview-bottom"]') || parentOne.matches('[data-value="outview-top"]')) {
      buttonOne.classList.remove("seeButton");
      buttonOne.classList.add("projectButton");
    }

}, 3);
}

{

const pushItAgain = setInterval (function() {
const buttonOne = document.getElementById('projectButtond');
const parentOne = document.getElementById("card d");





    if (parentOne.matches('[data-value="inview-top"]') || parentOne.matches('[data-value="inview-bottom"]')) {
      buttonOne.classList.add("seeButton");
      buttonOne.classList.remove("projectButton");
    } else if (parentOne.matches('[data-value="outview-bottom"]') || parentOne.matches('[data-value="outview-top"]')) {
      buttonOne.classList.remove("seeButton");
      buttonOne.classList.add("projectButton");
    }

}, 3);
}