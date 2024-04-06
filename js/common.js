$(document).ready(() => {
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

const showModal = (modalId) => {
  const modal = $(`#${modalId}`);
  $("body").addClass("showModal");
  const url = modal.data("url");
  modal.load(url);
};

$(document).on("click", "#mask", function () {
  $("body").removeClass("showModal");
  $(".modal").html("");
});

$(document).on("click", ".modal", function (event) {
  event.stopPropagation();
});
