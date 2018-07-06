const preloader = (function() {

  const preloaderImg = document.getElementsByTagName("*");
  const preloaderBlock = document.querySelector(".js-preloader");
  const preloaderText = document.querySelector(".js-preloader__text");
  const regImg = /background-image: url\(['"]?(.*?)['"]?\)/i;
  const wrapper = document.querySelector(".js-wrapper-preloader");
  const imagesArray = [];	
  let addImg;
  let img;
  let allImages;
  let percents = 0;
	
  return {
    imgAdd: function() {
	  addImg = document.createElement("img");
	  addImg.setAttribute("src", img);
	  imagesArray.push(addImg);
		
	},
	  
	show: function() {
//	 wrapper.classList.add("wrapper-hide");
		
	 return new Promise((resolve, reject) => {
	   for (let i = 0; i < preloaderImg.length; i++ ) {
		 if (preloaderImg[i].matches("img")) {
		   img = preloaderImg[i].getAttribute("src");
		   this.imgAdd();
		 } else if (preloaderImg[i].hasAttribute("style") && regImg.test(preloaderImg[i].getAttribute("style"))) {
			img = (preloaderImg[i].getAttribute("style").slice(22, -2));
			 this.imgAdd();
		 }
	   }
	
	
		
	allImages = 100 / imagesArray.length;
	
	for (let j = 0; j < imagesArray.length; j++) {
	  imagesArray[j].onload = function() {
		percents += allImages;
		
		if (percents < 100) {
		preloaderText.innerText = percents.toFixed() + "%";
		}  else {
			percents = 100;
			preloaderText.innerText = percents + "%";
		}
		  
		  if(percents === 100) {
			  resolve();
		  }
	  }	
	   };
	}).then(function() {
		 
		 preloaderBlock.classList.add("preloader_done");
	 });
	}
	  
	};
})();

preloader.show();
module.export = preloader;

//export default function preloader() {
//  const imgs = document.images;
////  console.log(imgs);
//  const imgTotalCount = imgs.length;
//  let imgLoadedCount = 0;
//  const preloaderBlock = document.querySelector(".js-preloader");
//  const preloaderText = document.querySelector(".js-preloader__text");
//
//  for (let i = 0; i < imgs.length; i++) {
//    const imageClone = new Image();
//    imageClone.onload = imgLoaded;
//    imageClone.onerror = imgLoaded;
//    imageClone.src = imgs[i].src;
//  }
//  function imgLoaded() {
//    imgLoadedCount += 1;
//	let countPerc = ((100 / imgTotalCount) * imgLoadedCount);
//	let fixCount = countPerc.toFixed(); 
//    preloaderText.innerText = fixCount + "%";
////      (((100 / img_total_count) * img_loaded_count) << 0) + "%";
//
//    if (imgLoadedCount >= imgTotalCount) {
//      setTimeout(function foo() {
//        if (!preloaderBlock.classList.contains("preloader_done")) {
//          preloaderBlock.classList.add("preloader_done");
//		} 
//	 }, 1000);
//        }
//  }
//
//
//	
//};
//
//
//if (document.getElementsByClassName("js-preloader").length > 0) {
//  preloader();
//};
