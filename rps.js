let pscore=0;
let cscore=0;
let options=["rock","paper","scissors"];
let option=null;
const r = document.getElementById("r");
const p = document.getElementById("p");
const s = document.getElementById("s");

const playerscore = document.getElementById("playerscore");
const computerscore=document.getElementById("computerscore");
const result = document.getElementById("result");

const poption = document.getElementById("playeroption");
const coption = document.getElementById("computeroption");
const resetbutton = document.getElementById("reset-button");

resetbutton.addEventListener("click",event=>{
    playerscore.textContent="Player Score : 0";
    computerscore.textContent= "Computer Score : 0";
    poption.textContent="Player : - - - -";
    coption.textContent="Computer : - - - -";
    result.textContent="- - - - - -";
    result.style.color="black";
})

r.addEventListener("click",event=>{
    let computerOption = Math.floor(Math.random()*3);
    let choice=options[computerOption];
    poption.textContent="Player : rock";
    coption.textContent="Computer : "+ choice;
    if(choice==="paper"){
        cscore++;
        result.style.color="red";
        result.textContent="You Lose";
    }
    else if(choice==="scissors"){
        pscore++;
        result.style.color="green";
        result.textContent="You Won";
    }
    else{
        result.style.color="black";
        result.textContent="It's a tie";

    }
    playerscore.textContent="Player Score :" + pscore;
    computerscore.textContent= "Computer Score :" +cscore;
});

p.addEventListener("click",event=>{
    let computerOption = Math.floor(Math.random()*3);
    let choice=options[computerOption];
    poption.textContent="Player : paper";
    coption.textContent="Computer : "+ choice;
    if(choice==="paper"){
        result.style.color="black";
        result.textContent="It's a tie";
       
        
    }
    else if(choice==="scissors"){
        cscore++;
        result.style.color="red";
        result.textContent="You Lose";
        
    }
    else{
        pscore++;
        result.style.color="green";
        result.textContent="You Won";
        
    }
    playerscore.textContent="Player Score :" + pscore;
    computerscore.textContent= "Computer Score :" +cscore;
});

s.addEventListener("click",event=>{
    let computerOption = Math.floor(Math.random()*3);
    let choice=options[computerOption];
    poption.textContent="Player : scissor";
    coption.textContent="Computer : "+ choice;
    if(choice==="paper"){
        pscore++;
        result.style.color="green";
        result.textContent="You Won";
        
    }
    else if(choice==="scissors"){
        result.style.color="black";
        result.textContent="It's a tie";
    }
    else{
        cscore++;
        result.style.color="red";
        result.textContent="You Lose";
    }
    playerscore.textContent="Player Score :" + pscore;
    computerscore.textContent= "Computer Score :" +cscore;
});




