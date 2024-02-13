// toggle icon menu

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//  scroll section active

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a ");

window.onscroll = () => {
  // header

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove the menu when click

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
  // reset: true, //comment this statement to reset the animations after reloading
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .protfolio-box, contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed(".multiple-text", {
  strings: [, "A Mechanical Engineer!", "A Web Developer!"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 100,
  loop: true,
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sectionss = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sectionss.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

let backtotop = document.querySelector(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

