let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")


const gencompchoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw.play again!";
    msg.style.backgroundColor="#081b31";
};

    const showwinner=(userwin)=>{
        if(userwin){
            userscore++;
            userscorepara.innerText=userscore;
            console.log("you win!");
            msg.innerText="You Win!";
            msg.style.backgroundColor="green"
        }else{console.log("you lose");
            
            compscore++;
            compscorepara.innerText=compscore;
            
            msg.innerText="You Lose!";
            msg.style.backgroundColor="red";

        }

    }


const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
//generate computer choice//
const compchoice=gencompchoice();
console.log("comp choice=",compchoice);
if(userchoice===compchoice){
    drawgame();
}else{
    let userwin=true;
    if(userchoice==="Rock"){
        userwin=compchoice==="Paper" ? false : true;
    }else if(userchoice==="Paper"){
        userwin=compchoice==="Scissor" ? false : true;
    }else {
       userwin= compchoice==="Rock" ? false : true;
    }
    showwinner(userwin);
}

};






choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{  
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});