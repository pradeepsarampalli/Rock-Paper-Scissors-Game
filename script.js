const result = document.querySelectorAll(".result p")
const score = document.querySelectorAll(".score p")

let choices = ['rock','paper','scissor']
let pscore = 0
let cscore = 0

function play(pchoice){
    let cchoice = choices[Math.floor(Math.random()*3)]
    if(pchoice == 'rock'){
        if(cchoice== 'paper'){
            cscore++
            result[2].textContent = "You Lose"
            result[2].style = "color:red";
        }
        else if(cchoice === 'scissor'){
            pscore++
            result[2].textContent = "You Won"
            result[2].style = "color:green";
        }
        else{
            result[2].textContent = "Its'a Tie"
            result[2].style = "color:black";
        }
    }
    else  if(pchoice == 'scissor'){
        if(cchoice== 'paper'){
            pscore++
            result[2].textContent = "You Won"
            result[2].style = "color:green";
        }
        else if(cchoice === 'rock'){
            cscore++
            result[2].textContent = "You Lose"
            result[2].style = "color:red";
        }
        else{
            result[2].textContent = "Its'a Tie"
            result[2].style = "color:black";
        }
    }
    else {
        if(cchoice== 'rock'){
            pscore++
            result[2].textContent = "You Won"
            result[2].style = "color:green";
        }
        else if(cchoice === 'scissor'){
            cscore++
            result[2].textContent = "You Lose"
            result[2].style = "color:red";
        }
        else{
            result[2].textContent = "Its'a Tie"
            result[2].style = "color:black";
        }
    }
    result[0].textContent = "Your Selection : " + pchoice
    result[1].textContent = "Robot's Selection : " + cchoice
    score[0].textContent = "Your Score : " + pscore
    score[1].textContent = "Robot Score : " +cscore
}
function reset(){
    location.reload()
}