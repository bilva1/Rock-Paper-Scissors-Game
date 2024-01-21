let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
const genComputerChoice=()=>
{
    const options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
};
const drawGame=()=>
{
    console.log("Game was draw.");
    msg.innerText="Game was draw! Play Again!"
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    { compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose!");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>
{
 console.log("user choice=",userChoice);
 //generate comp choice
 const compChoice=genComputerChoice();
 console.log("comp choice:",compChoice);
 if(userChoice===compChoice)
 {
    drawGame();
 }
 else
 {
    let userWin=true;
    if(userChoice==="rock")
    {//scissors,paper
        userWin=compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper")
    {
     //rock,scissors
     userWin=compChoice==="scissors"? false:true;
    }
    else
    {
        //rock,paper
        userWin=compChoice==="rock"? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
}

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("The choice was clicked:",userChoice);
        playGame(userChoice);
    });
});