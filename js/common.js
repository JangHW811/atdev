$(document).on("click", "button", function (e) {
  const item = e.target;
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

const modalObject = {};

const showModal = (modalId, callback) => {
  const modal = $(`#${modalId}`);
  $("body").addClass("showModal");
  const url = modal.data("url");
  modal.load(url, function () {
    if (callback) {
      modalObject[modalId] = { callback };
    }
  });
};

const closeModal = () => {
  $("body").removeClass("showModal");
  $(".modal").html("");
};

$(document).on("click", "#mask", function () {
  $("body").removeClass("showModal");
  $(".modal").html("");
});

$(document).on("click", ".modal", function (event) {
  event.stopPropagation();
});
