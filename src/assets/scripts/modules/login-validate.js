function loginValid() {
  const formLogin = document.querySelector("#js-form-login");	
  const inputLogin = document.querySelector(".js-form-login_login");
  const inputPassword = document.querySelector(".js-form-login_password");
  const inputCheckbox = document.querySelector(".js-form-login_checkbox");
  const inputRadiobtn = document.querySelectorAll(".js-form-login_radio");
  const submitBtn = document.querySelector(".form-login-button-login");
	
  const errorLogin = document.querySelector(".js-error-login_login");
  const errorPassword = document.querySelector(".js-error-login_password");
  const errorCheckbox = document.querySelector(".js-error-login_checkbox");
  const errorRadio = document.querySelector(".js-error-login_radio");
  const errorLoginIcon = document.querySelector(".form-login__input-before_login");
  const errorPasswordIcon = document.querySelector(".form-login__input-before_password");
	
  const sucsessForm = document.querySelector(".js-sucsess-login");
  const sucsessFormBtn = document.querySelector(".js-suscess-btn");
	
  let valid = true;
  let validLogin = true;
  let validPassword = true;
  let validCheckbox = true;
  let validradio = true;
	
 
	
  formLogin.addEventListener("submit", function(e) {
    e.preventDefault();	
	  
	 console.log(inputRadiobtn.value);
	  
 if (inputLogin.value == "") {
	validLogin = false; 
	errorLogin.style.display = "block";
	inputLogin.classList.add("form-login__input_error");
	 errorLoginIcon.classList.add("form-login__input-before_login_error");
 } else {
	validLogin = true ;
	 errorLogin.style.display = "none";
	inputLogin.classList.remove("form-login__input_error");
	 errorLoginIcon.classList.remove("form-login__input-before_login_error");
	 
 }	
	  
  if (inputPassword.value == "") {
	validPassword = false ; 
	errorPassword.style.display = "block";
	inputPassword.classList.add("form-login__input_error");
	 errorPasswordIcon.classList.add("form-login__input-before_password_error");
 } else {
	validPassword = true ;
	 errorPassword.style.display = "none";
	inputPassword.classList.remove("form-login__input_error");
	 errorPasswordIcon.classList.remove("form-login__input-before_password_error");
	 
 }
 if (inputCheckbox.checked == false) {
	validCheckbox = false;
	errorCheckbox.style.display = "block" 
 }	 else {
		validCheckbox = true;
	errorCheckbox.style.display = "none"  
 } 
	
	
if (inputRadiobtn[0].checked == false ) {
	validradio = false;
	errorRadio.style.display = "block";
} else {
	validradio = true;
	errorRadio.style.display = "none";
}
	  
 if (validLogin && validPassword && validCheckbox && validradio) {
	 valid = true;
 }	else {valid = false}
	  
	  
 if (valid == true) {
	sucsessForm.style.display = "block"; 
	
	 };
 sucsessFormBtn.addEventListener("click", function() {
	sucsessForm.style.display = "none";
   });
 });  
 
}

//if (document.getElementsByClassName(".form-login").length > 0) {
	loginValid();
//}