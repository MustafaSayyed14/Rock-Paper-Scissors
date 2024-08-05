let userScore = 0;
let compScore = 0;

let options = document.querySelectorAll(".option");
let msg = document.getElementById("msg");
let getCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
let drawGame = () => {
  msg.innerText = "The game is Draw";
  msg.style.backgroundColor = "#000";
};
let updateScore = (userWin) => {
  if (userWin) {
    userScore++;
    document.querySelector("#user-score").innerText = userScore;
  } else {
    compScore++;
    document.querySelector("#comp-score").innerText = compScore;
  }
};
/*
 * Displays the result of the game based on user's choice and computer's choice.
 * Updates the message text and background color accordingly.
 * Calls the updateScore function to update the score based on the game result.
 * @param {boolean} userWin - Indicates whether the user won the game.
 * @param {string} userChoice - The choice made by the user.
 * @param {string} compChoice - The choice made by the computer.
 */
let showResult = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win!!!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    updateScore(userWin);
  } else {
    msg.innerText = `You Lost!!!, ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    updateScore(userWin);
  }
};
let palyGround = (userChoice, compChoice) => {
  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "scissors" ? true : false;
    } else if (userChoice == "paper") {
      userWin = compChoice == "rock" ? true : false;
    } else {
      userWin = compChoice == "paper" ? true : false;
    }
    showResult(userWin, userChoice, compChoice);
  }
};
options.forEach((option) => {
  option.addEventListener("click", () => {
    let userChoice = option.id;
    let compChoice = getCompChoice();
    palyGround(userChoice, compChoice);
  });
});
