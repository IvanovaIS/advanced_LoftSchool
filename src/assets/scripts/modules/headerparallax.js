const headerParallax = (function() {
  const headerBg = document.querySelector(".js-header-bg");
  const headerBgText = document.querySelector(".js-header-bgtext");
  const headerContent = document.querySelector(".js-header-content");
  let scroll = 0;

  return {
    parallaxHeader() {
      let posY = 0;
      let speedH = 3;
      posY = window.pageYOffset / speedH + "px";
      headerBg.style.transform = "translateY(" + posY + ")";
      speedH = speedH / 1.5;
      headerBgText.style.transform = "translate(-50%,"-50% + posY + ")";
      speedH = speedH / 1.5;
      headerContent.style.transform = "translate(-50%,"-50% + posY + ")";
     
    }
  }
}
)();


if (document.getElementsByClassName("header").length > 0) {
  window.addEventListener("scroll", headerParallax.parallaxHeader);
 
}
