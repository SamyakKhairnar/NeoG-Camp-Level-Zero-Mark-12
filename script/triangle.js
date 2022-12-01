const angles = document.querySelectorAll(".angle-input");
const button = document.querySelector("#check-btn");
const message = document.querySelector("#check-triangle");

button.addEventListener("click", function validate() {
	if (angles[0].value === "" || angles[1].value === "" || angles[2].value === "") {
        message.innerText = "* All Three Inputs are Required to Check ! *";
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