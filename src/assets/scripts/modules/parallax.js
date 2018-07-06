const parallax = (function() {
  const parallaxLayer = document.querySelectorAll(".js-parallax__layer");

  return {
    parallaxMouse(event) {
      let positionX = 0;
      let positionY = 0;
      let speed = 200;
      for (let i = 0; i < parallaxLayer.length; i++) {
        positionX = event.pageX / -speed + "px";
        positionY = event.pageY / -speed + "px";
        parallaxLayer[i].style.transform = "translate3d(" + positionX + "," + positionY + ",0)";
        speed -= 20;
      }
    }
   }
	
}
) ();


if (document.getElementsByClassName("parallax").length > 0) {
  window.addEventListener("mousemove", parallax.parallaxMouse);
}
