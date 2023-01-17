// Start Section

let start = document.querySelector("#start");

//Guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continueBtn");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//Question Section

let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choice of questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//Correct and next button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

//Get All H4 from quiz section
let choice_que = document.querySelector("#choice_que");

let index = 0;
let timer = 0;
let interval = 0;

//Total points
let correct = 0;

//store answer value
let UserAns = undefined;

//what happens when start button is clicked 
start.addEventListener("click" , ()=>{
    start.style.display = "none";
    guide.style.display = "block";

});

//what happens when exit button is clicked 
exit.addEventListener("click" , ()=>{
    start.style.display = "block";
    guide.style.display = "none";

});

//Creating timer for Quiz timer section
let countDown = ()=>{
    if(timer === 20)
    {
        clearInterval(interval);

    }
    else
    {
        timer++;
        console.log(timer);
    }
}

setInterval(countDown,1000);