
//set up option1,2,3,4
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

//The correct answer
var num1=0;
var num2=0;

var n1=num1;
var n2=num2;
var answer=0;


//functions generating random add equations
function generate_equationLevel1(){
    num1=Math.floor(Math.random() * (1 + 5 - 0)) + 5;
    num2=Math.floor(Math.random() * (1 + 5 - 0)) + 5;


    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 5 - 0)) + 5;
    var wronganswer2 = Math.floor(Math.random() * (1 + 5 - 0)) + 5;
    var wronganswer3 = Math.floor(Math.random() * (1 + 5 - 0)) + 5;

    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*20);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*20);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*20);
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
        wronganswer1 = Math.floor(Math.random()*20);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*20);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*20);
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

}//end generate equations function level 1

function generate_equationLevel2(){
     num1=Math.floor(Math.random() * (1 + 20 - 10)) + 10;
     num2=Math.floor(Math.random() * (1 + 20 - 10)) + 10;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 20 - 10)) + 10;
    var wronganswer2 = Math.floor(Math.random() * (1 + 20 - 10)) + 10;
    var wronganswer3 = Math.floor(Math.random() * (1 + 20 - 10)) + 10;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*40);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*40);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*40);
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
        wronganswer1 = Math.floor(Math.random()*40);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*40);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*40);
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

}//end generate equations function level 2

function generate_equationLevel3(){
     num1=Math.floor(Math.random() * (1 + 30 - 20)) + 20;
     num2=Math.floor(Math.random() * (1 + 30 - 20)) + 20;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 30 - 20)) + 20;
    var wronganswer2 = Math.floor(Math.random() * (1 + 30 - 20)) + 20;
    var wronganswer3 = Math.floor(Math.random() * (1 + 30 - 20)) + 20;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*60);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*60);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*60);
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
        wronganswer1 = Math.floor(Math.random()*60);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*60);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*60);
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

}//end generate equations function level 3

function generate_equationLevel4(){
     num1=Math.floor(Math.random() * (1 + 40 - 30)) + 30;
     num2=Math.floor(Math.random() * (1 + 40 - 30)) + 30;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 40 - 30)) + 30;
    var wronganswer2 = Math.floor(Math.random() * (1 + 40 - 30)) + 30;
    var wronganswer3 = Math.floor(Math.random() * (1 + 40 - 30)) + 30;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*80);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*80);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*80);
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
        wronganswer1 = Math.floor(Math.random()*80);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*80);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*80);
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

}//end generate equations function level 4

function generate_equationLevel5(){
     num1=Math.floor(Math.random() * (1 + 50 - 40)) + 40;
     num2=Math.floor(Math.random() * (1 + 50 - 40)) + 40;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 50 - 40)) + 40;
    var wronganswer2 = Math.floor(Math.random() * (1 + 50 - 40)) + 40;
    var wronganswer3 = Math.floor(Math.random() * (1 + 50 - 40)) + 40;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*100);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*100);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*100);
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
        wronganswer1 = Math.floor(Math.random()*100);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*100);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*100);
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

}//end generate equations function level 5

function generate_equationLevel6(){
     num1=Math.floor(Math.random() * (1 + 60 - 50)) + 50;
     num2=Math.floor(Math.random() * (1 + 60 - 50)) + 50;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 60 - 50)) + 50;
    var wronganswer2 = Math.floor(Math.random() * (1 + 60 - 50)) + 50;
    var wronganswer3 = Math.floor(Math.random() * (1 + 60 - 50)) + 50;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*120);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*120);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*120);
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
        wronganswer1 = Math.floor(Math.random()*120);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*120);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*120);
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

}//end generate equations function level 6

function generate_equationLevel7(){
     num1=Math.floor(Math.random() * (1 + 70 - 60)) + 60;
     num2=Math.floor(Math.random() * (1 + 70 - 60)) + 60;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 70 - 60)) + 60;
    var wronganswer2 = Math.floor(Math.random() * (1 + 70 - 60)) + 60;
    var wronganswer3 = Math.floor(Math.random() * (1 + 70 - 60)) + 60;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*140);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*140);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*140);
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
        wronganswer1 = Math.floor(Math.random()*140);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*140);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*140);
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

}//end generate equations function level 7

function generate_equationLevel8(){
     num1=Math.floor(Math.random() * (1 + 80 - 70)) + 70;
     num2=Math.floor(Math.random() * (1 + 80 - 70)) + 70;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 80 - 70)) + 70;
    var wronganswer2 = Math.floor(Math.random() * (1 + 80 - 70)) + 70;
    var wronganswer3 = Math.floor(Math.random() * (1 + 80 - 70)) + 70;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*160);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*160);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*160);
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
        wronganswer1 = Math.floor(Math.random()*160);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*160);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*160);
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

}//end generate equations function level 8

function generate_equationLevel9(){
     num1=Math.floor(Math.random() * (1 + 90 - 80)) + 80;
     num2=Math.floor(Math.random() * (1 + 90 - 80)) + 80;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 90 - 80)) + 80;
    var wronganswer2 = Math.floor(Math.random() * (1 + 90 - 80)) + 80;
    var wronganswer3 = Math.floor(Math.random() * (1 + 90 - 80)) + 80;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*180);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*180);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*180);
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
        wronganswer1 = Math.floor(Math.random()*180);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*180);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*180);
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

}//end generate equations function level 9

function generate_equationLevel10(){
     num1=Math.floor(Math.random() * (1 + 100 - 90)) + 90;
     num2=Math.floor(Math.random() * (1 + 100 - 90)) + 90;
    var tempNum = 0;
    var equationSign = " ";
   

    var wronganswer1 = Math.floor(Math.random() * (1 + 100 - 90)) + 90;
    var wronganswer2 = Math.floor(Math.random() * (1 + 100 - 90)) + 90;
    var wronganswer3 = Math.floor(Math.random() * (1 + 100 - 90)) + 90;
    var allAnswers =[];
    var switchAnswers=[];

    //check to make sure wrong answers are not the same
    // if they are, we randomize them
    // possible to get the same number, but lesser chance
    if(wronganswer1 == wronganswer2 || wronganswer1 == wronganswer3) {
        wronganswer1 = Math.floor(Math.random()*200);
    }

    if(wronganswer2 == wronganswer1 || wronganswer2 == wronganswer3) {
        wronganswer2 = Math.floor(Math.random()*200);
    }

    if(wronganswer3 == wronganswer1 || wronganswer3 == wronganswer2) {
        wronganswer3 = Math.floor(Math.random()*200);
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
        wronganswer1 = Math.floor(Math.random()*200);
    }

    if(wronganswer2 == answer) {
        wronganswer2 = Math.floor(Math.random()*200);
    }

    if(wronganswer3 == answer) {
        wronganswer3 = Math.floor(Math.random()*200);
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

}//end generate equations function level 10












function wrong() {
    paragraph.innerHTML = "Answer is  " + answer;
    incorrectModal.style.display = "block";
	var elements = document.getElementsByClassName('equation'); // get all elements
}

function correct() {
        correctModal.style.display = "block";
        var elements = document.getElementsByClassName('equation'); // get all elements
}





// get the modal
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


// get the level from the database
// function getLevel(givenPromise, levelStore) {
//     let doc = await givenPromise.get();
//     if (doc.exists) {  
//         levelStore = doc.data().level;
//         alert("dbLevel in function " + levelStore );
//     }
//     throw new Error("No such document");
// };

// determines if the user has gotten 10 right questions 
function tenQuestions(currQ){
    if(currQ == 3) {
        return 0;
    }
    else {
        return currQ;
    }

}
// determines the current level then determines the type of equation we use
function currentLevel(lvl) {

    if(lvl == 0 || lvl == null) {
        alert("level " + lvl + " is not valid");
    }

    if(lvl == 1) {
        generate_equationLevel1();

    }
    else if(lvl == 2) {
        generate_equationLevel2();
    }
    else if(lvl == 3) {
        generate_equationLevel3();
    }
    else if(lvl == 4) {
        generate_equationLevel4();
    }
    else if(lvl == 5) {
        generate_equationLevel5();
    }
    else if(lvl == 6) {
        generate_equationLevel6();
    }
    else if(lvl == 7) {
        generate_equationLevel7();
    }
    else if(lvl == 8) {
        generate_equationLevel8();
    }
    else if(lvl == 9) {
        generate_equationLevel9();
    }
    else if(lvl == 10) {
        generate_equationLevel10();
    }
}

// get the level
// studentInGame is global - used in scoreTrack as well
var currLevel = 1;
// var studentInGame = db.collection("students").doc(localStorage.getItem("studentEmail"));
// getLevel(studentInGame, currLevel);


//////////////////////////////////
// BEGIN GAME //

// how many questions are right or wrong
var qRight = 0;
var qWrong = 0;
var qLevel = 1;


if(qRight == 1) {
    qRight = 0;
}
option1.addEventListener("click", function(){
    if(option1.innerHTML==answer){

            if(qRight == 10) {
                qLevel++;
                qRight = 0;
                
                if(qLevel == 11){
                    qLevel = 10;
                }
                document.getElementById("level").innerHTML= "level: " + qLevel;

                
            }
            else if (qRight < 10){
                qRight++; 
            }
            correct();

            document.getElementById("score").innerHTML= "score: " + qRight;
            
    }//if correct
    else{
        qWrong++;
        wrong();
    }
    // generation_equation();
    currentLevel(qLevel);
    ;
});


option2.addEventListener("click", function(){
    if(option2.innerHTML==answer){
        if(qRight == 1) {
            qLevel++;
            qRight = 0;
         
            if(qLevel == 11){
                qLevel = 10;

            }
            document.getElementById("level").innerHTML= "level: " + qLevel;

         
        }
        else if (qRight < 1){
            qRight++; 
        }
        
        correct();

        document.getElementById("score").innerHTML= "score: " + qRight;
    }
    else{
        qWrong++;
        wrong();
    }
    // generate_equation();
    currentLevel(qLevel);
});

option3.addEventListener("click", function(){
    if(option3.innerHTML==answer){
        if(qRight == 1) {
            qLevel++;
            qRight = 0;
           
            if(qLevel == 11){
                qLevel = 10;

            }
            document.getElementById("level").innerHTML= "level: " + qLevel;

        }
        else if (qRight < 1) {
            qRight++; 
        }
    
        correct();

    
        document.getElementById("score").innerHTML= "score: " + qRight;
    }
    else{
        qWrong++;
        wrong();
    }
    // generate_equation();
    currentLevel(qLevel);
});

option4.addEventListener("click", function(){
    if(option4.innerHTML==answer){
        if(qRight == 1) {
            qLevel++;
            qRight = 0;
         
            if(qLevel == 11){
                qLevel = 10;
 
            }
            document.getElementById("level").innerHTML= "level: " + qLevel;

         
        }
        else if (qRight < 1) {
            qRight++; 
        }

        correct();

        document.getElementById("score").innerHTML= "score: " + qRight;
    }
    else{
        qWrong++;
        wrong();
    }

    // generate_equation();
    currentLevel(qLevel);
});

currentLevel(currLevel);
// generate_equation();