function worksForm() {
  const form = document.querySelector("#js-aboutworks__form");	
  const modal = document.querySelector(".js-aboutworks__form-modal");
  const modaltext = document.querySelector(".js-aboutworks__form-modal-text");
  const modalbtn = document.querySelector(".js-aboutworks__form-btn");
 
  const fieldName = document.querySelector(".js-abuotworks-input-name");
  const fieldEmail = document.querySelector(".js-abuotworks-input-email");
  const fieldMessage = document.querySelector(".js-abuotworks-input-mes");
  const errName = document.querySelector(".js-aboutworks-field-name-error");
  const errMail = document.querySelector(".js-aboutworks-field-mail-error");
  const errMessage = document.querySelector(".js-aboutworks-field-mes-error");
  let valid = true;
  let validName = true;
  let validMail = true;
  let validMes = true;	

	
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    	
		
	  if ( fieldName.value == "" )
        {
        errName.style.display = "block"
        validName = false;
        }
	  else {
		errName.style.display = "none"
        validName = true;
	  }
	  
	  if ( fieldEmail.value == "" )
        {
        errMail.style.display = "block"
        validMail = false;
        }
	  else {
		errMail.style.display = "none"
        validMail = true;
	  }
	  
	  if ( fieldMessage.value == "" )
        {
        errMessage.style.display = "block"
        validMes = false;
        }
	  else {
		errMessage.style.display = "none"
        validMes = true;
	  }
      console.log()
	if (validName  && validMail  && validMes) {
		valid = true
	}	else {
		valid = false
	}
		
      	
	
	  
	  if (valid == true ){ 
	 const form = this;
	
	const type = form.getAttribute("method");
	const url = form.getAttribute("action");
 
      const xhr = new XMLHttpRequest();
	  
	 
	 xhr.open(type, url, true);
	  xhr.send();
	 
	
	  xhr.onreadystatechange  = function() {
	 	 
	 	
		 
		if (xhr.status == 200) {
            
		
		modal.style.display = "block";
        modaltext.innerText = "Сообщение отправлено";
        
     		} else if (!xhr.status == 200) {

		modal.style.display = "block";
		modaltext.innerText = "На сервере произошла ошибка";
		
		} else if(xhr.status == 404) {

		modal.style.display = "block";
		modaltext.innerText = "Письмо не отправлено. На сервере произошла ошибка";
		
		}
		  
        modalbtn.addEventListener("click", function() {
            modal.style.display = "none";
        });   
		 
	 }; 
	 

  };

	});
};

if (document.getElementsByClassName("aboutworks__form").length > 0) {
 worksForm();
}

function validForm() {

	const name = document.querySelector('.js-abuotworks-input-name');
	const patternName	= /^[а-яёА-ЯЁ\s]+$/;
	const patternMail	= /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;

	name.addEventListener('keydown', letters);
	

	function letters(event) {
		let isDigit = false;
		let isControl = false;



		if (event.key == 'й' || event.key == 'ц' || event.key == 'у' || event.key == 'й' || event.key == 'к' || event.key == 'е' || event.key == 'н' || event.key == 'й' || event.key == 'г' || event.key == 'ш' || event.key == 'щ' || event.key == 'й' || event.key == 'з' || event.key == 'х' || event.key == 'ъ' || event.key == 'й' || event.key == 'ф' || event.key == 'ы' || event.key == 'в' || event.key == 'й' || event.key == 'а' || event.key == 'п' || event.key == 'р' || event.key == 'й' || event.key == 'о' || event.key == 'л' || event.key == 'д' || event.key == 'й' || event.key == 'ж' || event.key == 'э' || event.key == 'я' || event.key == 'й' || event.key == 'ч' || event.key == 'с' || event.key == 'м' || event.key == 'й' || event.key == 'и' || event.key == 'т' || event.key == 'ь' || event.key == 'й' || event.key == 'б' || event.key == 'ю' || event.key == 'q' || event.key == 'й' || event.key == 'w' || event.key == 'e' || event.key == 'r' || event.key == 'й' || event.key == 't' || event.key == 'y' || event.key == 'u' || event.key == 'й' || event.key == 'i' || event.key == 'o' || event.key == 'p' || event.key == 'a' || event.key == 's' || event.key == 'd' || event.key == 'f' || event.key == 'g' || event.key == 'h' || event.key == 'j' || event.key == 'k' || event.key == 'l' || event.key == 'z' || event.key == 'x' || event.key == 'c' || event.key == 'v' || event.key == 'b' || event.key == 'n' || event.key == 'm'|| event.key == 'm') {
			isDigit = true;
		}

		if (event.key == 'Backspace' || event.key == 'Delete' || event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
			isControl = true;
		}

		if (!isDigit && !isControl) {
			event.preventDefault();
		}


	};

}




if (document.getElementsByClassName("aboutworks__form").length > 0) {
    validForm();
   }

