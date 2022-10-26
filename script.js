document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

var simpleSlides = function () {
  var i;
  var slides = document.querySelectorAll(".slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].setAttribute("style", "display:none");
  }
  count++;
  if (count > slides.length) {
    count = 1;
  }
  slides[count - 1].setAttribute("style", "display:block");
  setTimeout(simpleSlides, 3600);
};

var count = 0;
simpleSlides();
