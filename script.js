const formValue = document.querySelector("form");
const submit = formValue.querySelector(".button");
const errorMessage = formValue.querySelector(".errorMessage")
const card_1 = document.querySelector(".card-1");
const card_2 = document.querySelector(".card-2");

function signUp (e) {
	e.preventDefault();

	const data = new FormData(formValue);
	let {email} = Object.fromEntries(data)

	console.log(errorMessage)
	const emailError = emailValidate(email)
	console.log(emailError)
	if(emailError) {
		errorMessage.innerHTML = emailError
		errorMessage.style.color = "red"
	}
	else if (!emailError) {
		card_1.classList.add("hide");
		card_2.classList.remove("hide")
	}
}
submit.addEventListener("click", signUp)

function emailValidate (email) {
	const isValidEmail = /^\S+@\S+$/g
	if(!email) {
		return `Please enter your email`
	}
	else if(!isValidEmail.test(email)) {
		return `${email} isn't a valid email`
	}
}