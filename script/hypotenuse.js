const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const button = document.querySelector("#check-btn");
const message = document.querySelector("#check-length");

button.addEventListener('click', function validate(){
    
    if (Number(sideA.value) <= 0 || Number(sideB.value) <= 0) {
        message.innerText = "* Inputs should be Greater than Zero ! *";
	} else {
		const sum = calculateSqr(Number(sideA.value), Number(sideB.value));
		calculateLength(sum);
	}

});

function calculateSqr(a, b) {
	const sumOfSquares = a * a + b * b;
	return sumOfSquares;
}

function calculateLength(sum){
	const sqrtOfSum = Math.sqrt(sum);
	message.innerText = "The Area of the Triangle is "+Math.round(sqrtOfSum)+" cm²";
}
