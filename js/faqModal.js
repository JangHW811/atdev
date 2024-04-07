$(document).ready(() => {
  $("#faqModal")
    .find(".tabContainer")
    .on("click", ".tabItem", function () {
      const tabItem = $(this);
      const tabContainer = tabItem.closest(".tabContainer");
      tabContainer.find(".tabItem").removeClass("active");
      tabItem.addClass("active");
      tabContainer.find(".tabContent").removeClass("active");
      tabContainer.find(".tabContent").eq(tabItem.index()).addClass("active");
    });
});
