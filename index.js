window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav.navbar");
    if (window.scrollY > 60) {
        navbar.classList.remove("navbar-large");
        navbar.classList.add("navbar-small");
    } else {
        navbar.classList.add("navbar-large");
        navbar.classList.remove("navbar-small");
    }
});

window.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav.navbar");
    navbar.classList.add("navbar-large");
});

function triggerBtn() {
  var triggetContact = document.getElementById("nav-contact-tab");
  triggetContact.click();
}

document.getElementById("logo").addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    navDown();
  }
});

fetch("./home.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-home").innerHTML = html;

    // Force carousel initialization
    const myCarousel = document.querySelector('#homeCarousel');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        ride: 'carousel',
        pause: false
      });
    }
  });

fetch("./contact.html")
.then((response) => response.text())
.then((html) => {
  document.getElementById("nav-contact").innerHTML = html;
  addAfsprakenToggleEvents();
});
