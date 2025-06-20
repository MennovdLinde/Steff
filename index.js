window.addEventListener("scroll", function () {
    const logoBar = document.getElementById("logo-bar");

    if (window.scrollY > 50) {
        logoBar.classList.remove("logo-large");
        logoBar.classList.add("logo-small");
    } else {
        logoBar.classList.add("logo-large");
        logoBar.classList.remove("logo-small");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleFormBtn");
    const form = document.getElementById("contactForm");

    toggleBtn.addEventListener("click", function () {
        if (form.classList.contains("show")) {
            form.classList.remove("show");
        } else {
            form.classList.add("show");
        }
    });
});
