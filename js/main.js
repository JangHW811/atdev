const setChart = () => {
  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Chart.js Bar Chart - Stacked",
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  };
};

$(document).ready(() => {
  $(document).on("click", ".closeCollapseButton", function () {
    console.log("???", this);
    const collapse = $(this).closest(".collapse");
    collapse.addClass("close");
    setTimeout(() => {
      collapse.removeClass("open");
    }, 200);
  });
  $(document).on("click", ".openCollapseButton", function () {
    const collapse = $(this).closest(".collapse");
    collapse.removeClass("close");
    collapse.addClass("open");
  });

  $(document).on("click", ".paginationContainer a", function () {
    if ($(this).hasClass("active")) return;
    if ($(this).hasClass("prev")) {
      const active = $(".paginationContainer a.active");
      const prev = active.prev();
      if (prev.hasClass("prev")) return;
      active.removeClass("active");
      prev.addClass("active");
    } else if ($(this).hasClass("next")) {
      const active = $(".paginationContainer a.active");
      const next = active.next();
      if (next.hasClass("next")) return;
      active.removeClass("active");
      next.addClass("active");
    } else {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    }
  });

  setChart();
});
