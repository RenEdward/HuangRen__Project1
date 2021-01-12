//show scroll top button
const scrollTop = document.getElementById("scroll-top");
const scrollY = window.pageYOffset;

const scrollToTop = () => {
  this.scrollY >= 400
    ? (scrollTop.style.visibility = "visible")
    : (scrollTop.style.visibility = "hidden");
};
window.addEventListener("scroll", scrollToTop);

//show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

//close dropdown menu by navLink
const navLinks = document.querySelectorAll(".nav__link");
const portfolios = document.querySelectorAll(".portfolio__nav-item");

const navLinkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLinks.forEach((el) => el.addEventListener("click", navLinkAction));

//active navLink and portfolioLink
const active = (nodeList, className) => {
  nodeList.forEach((el) => el.classList.remove(className));
  event.target.classList.add(className);
};

portfolios.forEach((el) =>
  el.addEventListener("click", () => {
    active(portfolios, "active-portfolio");
  })
);

navLinks.forEach((el) =>
  el.addEventListener("click", () => {
    active(navLinks, "active-nav");
  })
);

//show skill bar
const webSkill = document.getElementById("skillWeb");
const designSkill = document.getElementById("skillDesign");
const modelSkill = document.getElementById("skill3D");

const webSkillScene = document.getElementById("web");
const closeWebBtn = document.getElementById("closeWeb");
const designSkillScene = document.getElementById("design");
const closeDesignBtn = document.getElementById("closeDesign");
const modelingSkillScene = document.getElementById("modeling");
const closeModelingBtn = document.getElementById("closeModeling");

//display skillBar
const showSkillBar = (button, content) => {
  button.addEventListener("click", () => {
    content.style.display = "block";
  });
};

showSkillBar(webSkill, webSkillScene);
showSkillBar(designSkill, designSkillScene);
showSkillBar(modelSkill, modelingSkillScene);

//close skill content
const closeSkillBar = (trigger) => {
  trigger.addEventListener("click", () => {
    trigger.parentElement.style.display = "none";
  });
};

closeSkillBar(closeWebBtn);
closeSkillBar(closeDesignBtn);
closeSkillBar(closeModelingBtn);

//Mixitup Plugin
var mixer = mixitup(".portfolio__data", {
  selectors: {
    target: ".portfolio__project"
  },
  animation: {
    duration: 400
  }
});

//gsap animation setting
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });

gsap.from(".home__data", { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2
});

gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: "expo.out",
  stagger: 0.2
});
gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2.5,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.2
});
