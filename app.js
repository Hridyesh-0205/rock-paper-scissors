let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];

}

const drawgame=()=>{

     msg.innerText="game get draw";
     msg.style.backgroundColor="grey";
}

const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win  yours ${userChoice}beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
     else{
        compScore++;
        compScorepara.innerText=compScore;
     
        msg.innerText=`you lose ${compChoice}beats yours ${userChoice}`;
        msg.style.backgroundColor="red";
    }
    }


const playgame=(userChoice)=>{
    
    
   const compChoice=genCompChoice();
  


   if(userChoice===compChoice){
    drawgame()
   }
   else{
    let userwin=true;
    if(userChoice==="rock"){
        //scissors,paper
        userwin= compChoice==="paper"?false:true;

    } 
     else if( userChoice==="paper")
    {
       userwin = compChoice === "paper" ? false : true;
    }
     else( userChoice==="scissors")
    {
        userwin=compChoice==="rock"?false:true;
    }

    showwinner(userwin,userChoice,compChoice);
    }
   }
    



choices.forEach((choice )=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playgame(userChoice);



    })


    
});

const resetBtn = document.querySelector("#reset-btn");

const resetGame = () => {
    userScore = 0;
    compScore = 0;

    userScorepara.innerText = userScore;
    compScorepara.innerText = compScore;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    msg.style.fontSize = "2rem";
};

resetBtn.addEventListener("click", resetGame);
