const voteButtons = document.querySelectorAll(".vote-button");
const showResultsButton = document.getElementById("show-results-button");
let highestVoteCount = 0;
let winningEmoji = "";

voteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentCount = parseInt(button.textContent);
    button.textContent = currentCount + 1;
  });
});

showResultsButton.addEventListener("click", () => {
  voteButtons.forEach((button) => {
    const currentCount = parseInt(button.textContent);
    if (currentCount > highestVoteCount) {
      highestVoteCount = currentCount;
      winningEmoji = button.previousElementSibling.textContent;
    }
  });
  alert(`The winner is ${winningEmoji} with ${highestVoteCount} votes!`);
});
