import Vue from "vue";

const articlesContent = [
  {
  title: "Статья 1",
  date: "00 января 2018",
  content: "<p> Lorem	</p> 
 

},
	
  {
  title: "Статья 2",
  date: "00 января 2018",
  content: "<p> Lorem	</p> 
  
},

  {
  title: "Статья 3",
  date: "00 января 2018",
  content: "<p> Lorem	</p> 

},


  {
  title: "Статья 4",
  date: "00 января 2018",
  content: "<p> Lorem	</p> 

}	
];



const blogArticlesContent = {
  template: "#blog-articles-content",

  props: {
    blogItem: Object 
  } 
	


};



const blogTitles = {
  template: "#blog-titles",
 
  props: {
    blogItem: Object,
    blogArticlesContent: Object
  }
 
};

new Vue({
  el: "#blog",
  components: {
	blogTitles,
	blogArticlesContent  
  },
  data: {
    blogContent: {}
  },
  created() {
	  this.blogContent = articlesContent;
	  
  },
	
  template: "#blog-section",
	
  methods: {
  
	 openAside() {
	   const asideBlock = this.$refs["aside-block"];
	 
	   asideBlock.classList.toggle("titlesarticles_active");
	 
	 },
	  
   findTop() {
	 const asideTitle = this.$refs["aside-title"];
	 const articleSection = this.$refs["article-section"]; 
	 
	 window.addEventListener("scroll", function() { 
	
     const sectionTop = articleSection.getBoundingClientRect().top;
     
	 
     if (sectionTop < 50 && screen.width > 1010 ) {
		
	 asideTitle.style.position = "fixed";
		asideTitle.style.top = 75  + "px"; 


	 }
		 
     else if (sectionTop > 51 && screen.width > 1010) {
		 asideTitle.style.position = "absolute";

	 }
		 
     else if (sectionTop < 50 && screen.width < 1010) {
		 asideTitle.style.top = 50 + "px";
		
	 }
	   });
   }
  },
		 
  
  mounted() {
    this.findTop()
 
  }
});


function drawTitle()  {
	const articleTitle = document.getElementsByClassName("js-article-title");
	const articleItem = document.getElementsByClassName("js-article");
	
	 window.addEventListener("scroll", function() { 
		for(let i = 0; i < articleTitle.length; i++ ) {
        let posArticleTop = articleItem[i].getBoundingClientRect().top;
		let exactArticleTop = posArticleTop.toFixed();
		 
		
        if (exactArticleTop < 345	 && exactArticleTop > -50  ) {
         articleTitle[i].classList.add("aricles-titles__item_active");
        }
		else {
		 articleTitle[i].classList.remove("aricles-titles__item_active");	
		}	
		}
      });
};

if (document.getElementsByClassName("js-article-title").length > 0) {
	drawTitle(); 
	}