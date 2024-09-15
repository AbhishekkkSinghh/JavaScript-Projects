let userScore = 0 ;
let compScore = 0 ;


let choices = document.querySelectorAll(".choice");
console.dir(choices);

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp")

const updateResults =  (userWins) =>{
    if(userWins){
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const winner = (user,computer,userWins) => {
    if(user == "rock" && computer == "paper"){
        msg.innerText = 'Computer Wins. Better luck next time!';
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        userWins = false;
        
    }
    else if(user == "rock" && computer == "rock"){
        msg.innerText ='Sorry its a Draw. Better luck next time!';
    }
    else if(user == "paper" && computer == "scissor"){
        msg.innerText ='Computer Wins. Better luck next time!';
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        userWins = false;
      
    }
    else if(user == "paper" && computer == "paper"){
        msg.innerText ='Sorry its a Draw. Better luck next time!';
    }
    else if(user == "scissor" && computer == "rock"){
        msg.innerText ='Computer Wins. Better luck next time!'
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        userWins = false;
        
      
    }
    else if(user == "scissor" && computer == "scissor"){
        msg.innerText ='Sorry its a Draw. Better luck next time!';
    }
    else{
        msg.innerText ='Congrats!,You Won';
        msg.style.backgroundColor = "green";
        userWins = true;
    }

    updateResults(userWins);
}

const genComputerChoice = () => {
    const options = ["rock","paper","scissor"];
    //rock ,paper, scissor
    let idx = Math.floor(Math.random() * 3);
    const computers_Choice = options[idx];
    return computers_Choice;
}

const playgame = (userChoice) => {
    console.log("user's choice is = " ,userChoice)
    //to generate computers choice
    const compChoice = genComputerChoice();
    console.log("computers's choice is = " ,compChoice);

    let userWins;
    winner(userChoice,compChoice,userScore,compScore,userWins);

}


choices.forEach((choice)=> {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked with id:", userChoice);
        playgame(userChoice);
    })
})