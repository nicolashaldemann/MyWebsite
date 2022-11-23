/*smooth Scroll*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/*Slideshow*/
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

/*Timeline*/
var count = 0;
simpleSlides();

(function () {
  const items = document.querySelectorAll(".timeline-section li");

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function slideIn() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("slide-in");
      } else {
        items[i].classList.remove("slide-in");
      }
    }
  }

  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);
})();

/*mobile button*/
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

/*Content Cards*/
const card = document.querySelector(".card__inner");

card.addEventListener("dblclick", function alertMsg() {
  alert(
    "Um Nachricht zu sehen auf folgenden Proton Mail zugreifen: mywebsite_NH@proton.me Passwort: B-qwertz-F"
  );
});

card.addEventListener("dblclick", function (e) {
  card.classList.toggle("is-flipped");
});

function SendMessage() {
  alert(
    "Um Nachricht zu sehen auf folgenden Proton Mail zugreifen: mywebsite_NH@proton.me Passwort: B-qwertz-F"
  );
  card.classList.toggle("is-flipped");
}

/* Contact */

const form = document.getElementById("form");

const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);

  e.preventDefault();

  var object = {};

  formData.forEach((value, key) => {
    object[key] = value;
  });

  var json = JSON.stringify(object);

  msg.innerHTML = "Einen Augenblick bitte";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Accept: "application/json",
    },

    body: json,
  })
    .then(async (response) => {
      let json = await response.json();

      if (response.status == 200) {
        msg.innerHTML = json.message;
      } else {
        console.log(response);

        msg.innerHTML = json.message;
      }
    })

    .catch((error) => {
      console.log(error);

      msg.innerHTML = "Ein Fehler ist aufgetreten";
    })

    .then(function () {
      form.reset();

      setTimeout(() => {
        result.style.display = "";
      }, 3000);

      form.reset();
    });
});

/* skills animate */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
