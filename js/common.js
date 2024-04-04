$(document).ready(() => {
  $("#header").load("../html/header.html");
  Array.from(document.querySelectorAll("button")).forEach((item) => {
    item.addEventListener("click", function (e) {
      const ripple = document.createElement("div"),
        rect = item.getBoundingClientRect();
      (ripple.className = "animate"),
        (ripple.style.left = `${e.x - rect.left}px`),
        (ripple.style.top = `${e.y - rect.top}px`),
        (ripple.style.background = `#919eab7a`),
        ripple.style.setProperty("--ripple-scale", item.offsetWidth),
        item.append(ripple),
        setTimeout(function () {
          ripple.parentNode.removeChild(ripple);
        }, 500);
    });
  });
});
