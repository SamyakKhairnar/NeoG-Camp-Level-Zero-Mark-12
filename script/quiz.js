const quizForm = document.querySelector(".quiz-form");
const button = document.querySelector("#check-btn");
const message = document.querySelector("#output");

const answers = ["90","2-congruent-sides","equilateral-triangle","obtuse","180-degrees"];

button.addEventListener('click', function calculateScore(){

    const data = new FormData(quizForm);
	let index = 0,
		score = 0;
	for (let entry of data.values()) {
		if (entry === answers[index]) {
			score++;
		}
		index++;
	}
	message.innerText = "Your score is : "+score+" !";

});




