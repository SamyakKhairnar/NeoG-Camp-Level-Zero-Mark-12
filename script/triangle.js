const angles = document.querySelectorAll(".angle-input");
const button = document.querySelector("#check-btn");
const message = document.querySelector("#check-triangle");

button.addEventListener("click", function validate() {
	if (angles[0].value <=0 || angles[1].value <=0 || angles[2].value <=0) {
        message.innerText = "* Inputs should be Greater than Zero ! *";
	} else {
		const sumTriangle = sumOfAngles();
		isTriangle(sumTriangle);
	}
});

function sumOfAngles() {
	const sum =
		Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
	return sum;
}

function isTriangle(angle){
    if (angle === 180) {
		message.innerText = "Yay ! It is an Triangle !!";
	} else {
		message.innerText = "Sorry Buddy ! Not a Triangle";
	}
}