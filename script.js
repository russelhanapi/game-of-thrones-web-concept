ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 200,
});

ScrollReveal().reveal(".logo-container", {
  delay: 1500,
  origin: "bottom",
});

ScrollReveal().reveal(".award-img", {
  origin: "bottom",
  interval: 200,
  easing: "ease-out",
  duration: 1500,
});

ScrollReveal().reveal(".author-img", {
  origin: "top",
});

ScrollReveal().reveal(".paragraphs-container, .scrollable-synopsis", {
  origin: "bottom",
});

ScrollReveal().reveal(
  "#heading-information, .poster-img, .secondary-heading--small",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(".book-img, #heading-synopsis", {
  origin: "right",
});

ScrollReveal().reveal(".sigil", {
  delay: 0,
  origin: "top",
  interval: "200",
});

ScrollReveal().reveal(".blockquote:nth-child(1)", {
  delay: 500,
  origin: "bottom",
});

ScrollReveal().reveal(".blockquote:nth-child(2)", {
  delay: 3000,
  origin: "top",
  distance: "20px",
});

ScrollReveal().reveal(".blockquote:nth-child(3)", {
  distance: "0px",
  delay: 6300,
  duration: 3800,
});

ScrollReveal().reveal(".blockquote:nth-child(4)", {
  distance: "0px",
  delay: 8000,
  duration: 1000,
});

function clickedClose(house) {
  document.getElementById("modal-" + house).style.display = "none";
  document.querySelector("body").style.overflow = "visible";
  document.querySelector("html").style.overflow = "visible";

  document.getElementsByClassName("sigil").style.pointerEvents = "auto";
}

function clickedHouse(house) {
  document.getElementById("modal-" + house).style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("html").style.overflow = "hidden";
  document.getElementsByClassName("sigil").style.pointerEvents = "none";
}
