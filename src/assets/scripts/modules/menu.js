export default function menuAppear() {
  const openBtn = document.querySelector(".js-openmenu");
  const closeBtn = document.querySelector(".js-closemenu");
  const menuBlock = document.querySelector(".js-menu");
  const leftDoor = document.querySelector(".hamburgermenu__leftdoor");
  const rightDoor = document.querySelector(".hamburgermenu__rightdoor");
  const menuItems = document.querySelectorAll(".js-menu-items");
  const elStyle = getComputedStyle(leftDoor);
  const wPos = elStyle.width;

  openBtn.addEventListener("click", function() {
    
    leftDoor.style.width = 50 + "%";
    rightDoor.style.width = 50 + "%";
	
	setTimeout(function foo() {
	
    menuBlock.classList.add("js-menu_visible");
    menuBlock.style.transitionDuration = 0.5 + "s";
	}, 1300);
 
	  });
  closeBtn.addEventListener("click", function() {
	  
    menuBlock.classList.remove("js-menu_visible");
    menuBlock.style.transitionDuration = 0.5 + "s";
    
	setTimeout(function foo() {
	  leftDoor.style.width = 0 + "%";
      rightDoor.style.width = 0 + "%";
     
	}, 100);
  });
}

if (document.getElementsByClassName("hamburgermenu").length > 0) {
menuAppear();
};