let body=document.querySelector('body');
body.classList.add("bodybackground");

let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let HS=0;
let h2=document.querySelector("h2");
    if (window.innerWidth <= 1200) {
        h2.innerText = "Tap START button To Start The Game";  
    } else {
        h2.innerText = "Press Any Key To Start The Game";
    }

document.addEventListener("keypress",function()
{
    if(started==false)
        {
            started=true;
            levelUp();
        }
});

let phnbtn=document.querySelector(".phnbtn");
phnbtn.addEventListener("click",function()
{
    if(started==false)
        {
            started=true;
            levelUp();
        }
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },250);
}

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx)
{
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if (window.innerWidth <= 768) {
            h2.innerHTML = `Game over! your Score was <b>${level}</b> <br> press START  Button to start`;
        } else {
            h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
        }
        body.classList.remove("bodybackground");
        body.style.backgroundColor = "red";
        setTimeout(function()
    {
        body.classList.add("bodybackground");
    },150);
    highScore();
    reset();
    }
}


 function btnPress(){
    if(started==true)
    {
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    }
}



let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
    {
        btn.addEventListener("click",btnPress);
    }
   
    function reset()
    {
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;
    }

function highScore()
    {
        if (level >= HS) {
            HS = level;
            let h3 = document.querySelector("h3");
            h3.innerText = `High Score: ${HS}`;
        }
    }