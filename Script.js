
document.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
