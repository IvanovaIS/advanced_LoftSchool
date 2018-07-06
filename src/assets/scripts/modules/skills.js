import Vue from "vue";

const skills = [
  {
    titleGruop: "Frontend",
    skillsCont: {
      Html5: 90,
      css3: 85,
      "javaScript & jQuery": 50
		 
	 }

  },
  {
    titleGruop: "Backend",
    skillsCont: {
      PHP: 10,
      mySQL: 30,
      "Node.js": 40,
      "Mongo.db": 50
		 
	 }
   
  },
  {
    titleGruop: "Workflow",
    skillsCont: {
      Git: 50,
      Gulp: 30,
      Bower: 20
    }
  }
];



const skill = {
  template: "#skills-row-item",
  props: {
    titleSkills: String,
    skillPercents: Number,

  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      let findBlckTop = this.$root.findCircle();
      const dash = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (dash / 100) * (100 - this.skillPercents);

      window.addEventListener("scroll", function() { 

        const posTop = findBlckTop.findTop.getBoundingClientRect().top;
        const exactTop = posTop.toFixed();
        if (exactTop > 300 && exactTop < 350) {
          circle.style.strokeDashoffset = persents;
        }
      });
    }
  },

  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#aboutme__skills-block",
  components: {
    skillsRow
  },
  data: {
    skillscontent: {}
  },
  created() {
    const dataSkills = skills;
    this.skillscontent = dataSkills;
   
  },

  template: "#skills-section",

  methods: {
    findCircle() {
      let circleBlock = this.$refs["skills-block"];
      return {
        findTop: circleBlock
      };
    }
  }

  });
