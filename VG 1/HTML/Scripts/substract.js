
//set up option1,2,3,4
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

//The correct answer
var answer =0;

//beginning function generating random add equations
function generate_equation(){
var num1=Math.floor(Math.random()*13);
var num2=Math.floor(Math.random()*13);

if(num1>=num2){

}
else{
    num2=num1;
    num1=num2;
}


var wronganswer1 = Math.floor(Math.random()*11);
var wronganswer2 = Math.floor(Math.random()*11);
var wronganswer3 = Math.floor(Math.random()*11);


var allAnswers =[];
var switchAnswers=[];

answer = num1-num2;//correct answer

document.getElementById("num1").innerHTML=num1;
document.getElementById("num2").innerHTML=num2;

allAnswers=[answer, wronganswer1, wronganswer2, wronganswer3];


for(x=allAnswers.length;x--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(x+1)),1)[0]);



}//end for

option1.innerHTML=switchAnswers[0];
option2.innerHTML=switchAnswers[1];
option3.innerHTML=switchAnswers[2];
option4.innerHTML=switchAnswers[3];

}//end function

function wrong() {
	var elements = document.getElementsByClassName('equation'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "Red";
    }
}

function correct() {
        var elements = document.getElementsByClassName('equation'); // get all elements
        for(var i = 0; i < elements.length; i++){
            elements[i].style.backgroundColor = "Green";
        }
}

function reset() {
    var elements = document.getElementsByClassName('equation'); // get all elements
    for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "White";
    }
}


option1.addEventListener("click", function(){
    if(option1.innerHTML==answer){
        correct();
        generate_equation();
    }
    else{
        wrong();
        alert("Correct answer should be " + answer);
        generate_equation();
    }
})


option2.addEventListener("click", function(){
    if(option2.innerHTML==answer){
        correct();
        generate_equation();
    }
    else{
        wrong();
        alert("Correct answer should be " + answer);
        generate_equation();
    }
})

option3.addEventListener("click", function(){
    if(option3.innerHTML==answer){
        correct();
        generate_equation();
    }
    else{
        wrong();
        alert("Correct answer should be " + answer);
        generate_equation();
    }
})

option4.addEventListener("click", function(){
    if(option4.innerHTML==answer){
        correct();
        generate_equation();
    }
    else{
        wrong();
        alert("Correct answer should be " + answer);
        generate_equation();
    }
})


generate_equation();