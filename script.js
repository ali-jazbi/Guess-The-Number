let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const message = document.querySelector(".message");
const numberText = document.querySelector(".number");
let lastScore = document.querySelector(".lastscore");
const displayMessage = (message) =>
	(document.querySelector(".message").textContent = message);
document.querySelector(".check").addEventListener("click", function () {
	const userNumber = Number(document.querySelector(".guess").value);
	if (
		!userNumber ||
		userNumber > 20 ||
		userNumber < 1 ||
		userNumber === "" ||
		isNaN(userNumber)
	) {
		displayMessage("Please Enter a valid nuber between 1 to 20 ‼️");
	} else if (userNumber === randomNumber) {
		displayMessage("You Win 🏆");
		document.querySelector("body").style.backgroundColor = "#60b347";
		numberText.style.width = "30rem";
		numberText.textContent = randomNumber;
		lastScore.textContent = score;
		document.querySelector(".check").disabled = true;
		document.querySelector(".guess").disabled = true;
		// make input just positive number
	} else if (userNumber !== randomNumber) {
		if (score > 1) {
			displayMessage(
				userNumber > randomNumber ? "too high ⬆️" : "too low ⬇️"
			);
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("You Lost the game ‼️");
			document.querySelector(".score").textContent = 0;
			document.querySelector("body").style.backgroundColor = "#ff0000";
			document.querySelector(".check").disabled = true;
			document.querySelector(".guess").disabled = true;
		}
	}
});
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	document.querySelector(".score").textContent = score;
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
	numberText.style.width = "15rem";
	numberText.textContent = "?";
	displayMessage("Start guessing...");
	document.querySelector(".check").disabled = false;
	document.querySelector(".guess").disabled = false;
	randomNumber = Math.trunc(Math.random() * 20 + 1);
});
