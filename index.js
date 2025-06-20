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
