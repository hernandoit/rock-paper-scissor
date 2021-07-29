// player object
const player = {
	choice: null,
	name: 'player',
}
// computer object
const computer = {
	choice: null,
	name: 'computer',
}
// choices array
const choices = ['rock', 'paper', 'scissor']
// function to randomly choose computers choice from the choices array
function computerChooses() {
	const randomIndex = Math.floor(Math.random() * choices.length)
	computer.choice = choices[randomIndex]
}
// conditional statements to compare computers choice against players choice
function compareChoices() {
	// maybe a winning array to handle requests
	const results = document.getElementById('display-choice')
	if (computer.choice === player.choice) {
		results.innerText =
			'The computer chose ' +
			computer.choice +
			' and the player chose ' +
			player.choice +
			" it's a tie."
	} else if (computer.choice == choices[0]) {
		if (player.choice === choices[1]) {
			results.innerText =
				'The player wins! The computer chose ' +
				computer.choice +
				' and the player chose ' +
				player.choice +
				'.'
		} else {
			results.innerText =
				'The conputer wins! The computer chose ' +
				computer.choice +
				' and the player chose ' +
				player.choice +
				'.'
		}
	} else if (computer.choice === choices[1]) {
		if (player.choice === choices[2]) {
			results.innerText =
				'The player wins! The computer chose ' +
				computer.choice +
				' and the player chose ' +
				player.choice +
				'.'
		} else {
			results.innerText =
				'The conputer wins! The computer chose ' +
				computer.choice +
				' and the player chose ' +
				player.choice +
				'.'
		}
	} else if (computer.choice === choices[2]) {
		if (player.choice === choices[0]) {
			results.innerText =
				'The player wins! The computer chose ' +
				computer.choice +
				' and the player chose ' +
				player.choice +
				'.'
		} else {
			results.innerText =
				'The conputer wins! The computer chose ' +
				computer.choice +
				' and the player chose ' +
				player.choice +
				'.'
		}
	}
}
// function to run computers choice and conditional statements to determine the winner and puts it on the HTML '#display-choice' div.
function displayResults() {

	computerChooses()
	compareChoices()
}
// function to set players choice to the button click event and run the results function
function btnChoice(e) {
	player.choice = e.target.id
	displayResults()
}
// event listening on the click event and running the function setting the players choice to the button
document.querySelector('#rock').addEventListener('click', btnChoice)
document.querySelector('#paper').addEventListener('click', btnChoice)
document.querySelector('#scissor').addEventListener('click', btnChoice)
