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

  modal.show().load(url, function () {
    if (callback) {
      modalObject[modalId] = { callback };
    }
  });
};

const closeModal = (element) => {
  const target = $(element).closest(".modalWrapper");
  target.html("").hide();

  const modals = $(".modal");
  if (modals?.length === 0) {
    $("body").removeClass("showModal");
  }
};

$(document).on("click", ".mask", function () {
  closeModal(this);
});

$(document).on("click", ".modal, .mask", function (event) {
  event.stopPropagation();
});

const showLoading = () => {
  $("#loadingWrapper").show();
  $("body").addClass("showModal");
};

const hideLoading = () => {
  $("#loadingWrapper").hide();
  $("body").removeClass("showModal");
};

const updateProgress = (progressNumber) => {
  $("#progressWrapper progress").val(progressNumber);
  $("#progressWrapper .percent").text(progressNumber);
};

const showProgress = () => {
  $("#progressWrapper").show();
  $("body").addClass("showModal");
};

const hideProgress = () => {
  $("#progressWrapper").hide();
  $("body").removeChild("showModal");
};
