var blur = (function() {
  var wrap = document.querySelector(".js-blur-wrap");
  var cont = document.querySelector(".js-blur-container");
  return {
    set: function() {
      var imgWidth = document.querySelector(".js-blur-background").offsetWidth;
      var imgHeight = document.querySelector(".js-blur-background").offsetHeight;
      var posLeft = -wrap.offsetLeft;
      var posTop = -wrap.offsetTop;
      var blurCss = cont.style;
      blurCss.backgroundSize = imgWidth + "px" + " " + imgHeight + "px";
      blurCss.backgroundPosition = posLeft + "px" + " " + posTop + "px";}};
})();
blur.set();

if (document.getElementsByClassName("js-blur-wrap").length > 0) {
window.onresize = function() {
  blur.set();
};
}