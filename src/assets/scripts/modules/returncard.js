export default function returncard() {
 
  const btnAuth = document.querySelector(".js-autorise-card-btn");
  const welc = document.querySelector(".js-weclomecard");
  const login = document.querySelector(".js-login");
  const btnMain = document.querySelector(".js-tomain-btn");

  btnAuth.addEventListener("click", function() {
	
	login.classList.remove("js__rotate-card");
    welc.classList.add("js__rotate-card");
    btnAuth.classList.add("autorise-btn_done");
  });

  btnMain.addEventListener("click", function() {
    welc.classList.remove("js__rotate-card");
    login.classList.add("js__rotate-card");
    btnAuth.classList.remove("autorise-btn_done");
  });

}
if (document.getElementsByClassName("welcome").length > 0) {
  returncard();
}
