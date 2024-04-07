const setChart = () => {
  var ctx = document.getElementById("chartArea").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["영상회의", "음성회의", "번역"],
      datasets: [
        {
          label: "data1",
          backgroundColor: "#000f36",
          data: [44, 16, 45],
        },
        {
          label: "data2",
          backgroundColor: "#002d9d",
          data: [16, 66, 15],
        },
        {
          label: "data3",
          backgroundColor: "#1a52de",
          data: [52, 14, 15],
        },
        {
          label: "data4",
          backgroundColor: "#acc1fd",
          data: [25, 33, 15],
        },
      ],
    },
    options: {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: "x",
        },
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            barThickness: 20,
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
            type: "linear",
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: { position: "bottom" },
    },
  });
};

$(document).ready(() => {
  setChart();
  showModal("registModal", (data) => {
    console.log(data);
  });
});

$(document).on("click", ".closeCollapseButton", function () {
  const collapse = $(this).closest(".collapse");
  collapse.addClass("close");
  $(".mobileMask").hide();
  setTimeout(() => {
    collapse.removeClass("open");
  }, 200);
});
$(document).on("click", ".openCollapseButton", function () {
  const collapse = $(this).closest(".collapse");
  collapse.removeClass("close");
  collapse.addClass("open");
});

$(document).on("click", ".mobileOpenCollapseButton", function () {
  const collapse = $(".leftSection");
  collapse.removeClass("close");
  collapse.addClass("open");
  $(".mobileMask").show();
});

$(document).on("click", ".mobileMask", function () {
  const collapse = $(".leftSection");
  collapse.removeClass("open");
  collapse.addClass("close");
  $(".mobileMask").hide();
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

$(document).on("click", ".searchUser", function () {
  showModal("userSearch", (data) => {
    console.log(data);
  });
});

$(document).on("click", ".regist", function () {
  showModal("registModal", (data) => {
    console.log(data);
  });
});
