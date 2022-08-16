let _Answer;
let ifClicked = false;
let nbGoodAns = 0;
let nbOfPlay = 0;
function quiz(){
    let operator = ['+', '-', '*', '/'];
    let operatorChoice = operator[Math.floor(Math.random() * 4)];
    let numbers = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    let answerText = `${numbers[0]} ${operatorChoice} ${numbers[1]}`;
    let answer;
    document.getElementById("equation").innerHTML = answerText;
    switch(operatorChoice){
        case "+":
            answer = numbers[0] + numbers[1];
            break;
        case "-":
            answer = numbers[0] - numbers[1];
            break;
        case "*":
            answer = numbers[0] * numbers[1];
            break;
        case "/":
            answer = (numbers[0] / numbers[1]).toFixed(2);
            break;
    }
    _Answer = answer;
    generateText(answer);
}


function generateText(answer){
    let goodAns = Math.floor(Math.random() * 6);
    const collection = document.getElementsByClassName("randomText");
    for (let i = 0; i < collection.length; i++) {
        if(i == goodAns){
            collection[i].innerHTML = answer;
            continue;
        }
        collection[i].innerHTML = Math.floor(Math.random() * 500);
    }
}

function clickGoodAnswer(clickedAnswer, pos){
    let box = document.getElementsByClassName("box");
    if(!ifClicked){
        if(clickedAnswer == _Answer){
            box[pos].style.backgroundColor = "green";
            nbGoodAns++;
        } else{
            box[pos].style.backgroundColor = "red";
            for(let i = 0; i < box.length; i++){
                if(document.getElementsByClassName("randomText")[i].innerHTML == _Answer){
                    box[i].style.backgroundColor = "green";
                    break;
                }
            }
        }
        nbOfPlay++;
        stats();
    }
    ifClicked = true;
}

function playAgain(){
    ifClicked = false;
    let box = document.getElementsByClassName("box");
    for(let i = 0; i < box.length; i++){
        box[i].style.backgroundColor = "black";
        }
    quiz();
}

function stats(){
    document.getElementById("stats").innerHTML = `<h1>${nbGoodAns} / ${nbOfPlay}</h1>`;
}