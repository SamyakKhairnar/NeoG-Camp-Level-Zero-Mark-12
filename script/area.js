const base = document.querySelector("#base");
const height = document.querySelector("#height");
const button = document.querySelector("#check-btn");
const message = document.querySelector("#check-area");

button.addEventListener('click', function validate(){
    
    if (Number(base.value) <=0 || Number(height.value) <=0) {
        message.innerText = "* Inputs should be Greater than Zero ! *";
	} else {
		const sum = multiply(Number(base.value), Number(height.value));
		calculateArea(sum);
	}

});

function multiply(base, height) {
	const multipliedOutput = base * height;
	return multipliedOutput;
}

function calculateArea(sum){
	const area = sum / 2;
	message.innerText = "The Area of the Triangle is "+area+" cm²";
}
