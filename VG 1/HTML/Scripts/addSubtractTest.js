


//set up option1,2,3,4
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

//The correct answer
var answer = 0;

//begnning function generating random add equations
function generate_equation(){
    var num1=Math.floor(Math.random()*11);
    var num2=Math.floor(Math.random()*11);
    var tempNum = 0;
    var equationSign = " ";

    var wronganswer1 = Math.floor(Math.random()*11);
    var wronganswer2 = Math.floor(Math.random()*11);
    var wronganswer3 = Math.floor(Math.random()*11);

    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*13);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*13);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*13);
    }


    // determine if equation is subtraction or addition based on if num2 can be mod by 2
    if( num2 % 2 == 0) {
        answer = num1 + num2;
        sign = "+";
    }

    // else, we do subtraction
    else {
        // switch num1 with num2 if num2 is greater
        if(num1 < num2) {
            tempNum = num2;
            num2 = num1;
            num1 = tempNum2;
        }

        answer = num1 - num2
        sign = "-";
    }

    document.getElementById("num1").innerHTML= num1;
    document.getElementById("num2").innerHTML= num2;
    document.getElementById("sign").innerHTML= sign;

    //check that wrong answers are not the same as the correct answer
    // randomize wrong answers again if wrong answers == correct answer
    if(wronganswer1 == answer) {
        wronganswer1 = Math.floor(Math.random()*13);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*13);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*13);
    }

    allAnswers=[answer, wronganswer1, wronganswer2, wronganswer3];


    // randomize order of answers on addSubtract page
    for(x=allAnswers.length;x--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(x+1)),1)[0]);

        option1.innerHTML=switchAnswers[0];
        option2.innerHTML=switchAnswers[1];
        option3.innerHTML=switchAnswers[2];
        option4.innerHTML=switchAnswers[3];

    } //end for

}//end generate equations function


function wrong() {
    paragraph.innerHTML = "Answer is  " + answer;
    incorrectModal.style.display = "block";
	var elements = document.getElementsByClassName('equation'); // get all elements
}

function correct() {
        correctModal.style.display = "block";
        var elements = document.getElementsByClassName('equation'); // get all elements
}

// Get the modal
var incorrectModal = document.getElementById("incorrectModal");
var correctModal = document.getElementById("correctModal");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

var paragraph = document.getElementsByClassName("incorrectAnswer")[0];

// to x out of pop ups
span.onclick = function() {
    incorrectModal.style.display = "none";
}
span2.onclick = function() {
    correctModal.style.display = "none";
}

//////////////////////////////////
// BEGIN GAME //

// how many questions are right or wrong
var qRight = 0;
var qWrong = 0;


option1.addEventListener("click", function(){
    if(option1.innerHTML==answer){
            qRight++;
            correct();
    }
    else{
        qWrong++;
        wrong();
    }
    generate_equation();
});


option2.addEventListener("click", function(){
    if(option2.innerHTML==answer){
        qRight++;
        correct();
    }
    else{
        qWrong++;
        wrong();
    }
    generate_equation();
});

option3.addEventListener("click", function(){
    if(option3.innerHTML==answer){
        qRight++;
        correct();
    }
    else{
        qWrong++;
        wrong();
    }
    generate_equation();
});

option4.addEventListener("click", function(){
    if(option4.innerHTML==answer){
        qRight++;
        correct();
    }
    else{
        qWrong++;
        wrong();
    }

    generate_equation();
});

generate_equation();