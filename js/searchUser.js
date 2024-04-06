$(document).on("change", ".searchList input[type='checkbox']", function () {
  const checked = $(this).prop("checked");
  if ($(this).hasClass("checkAll")) {
    $(".searchList input[type='checkbox']").prop("checked", checked);
  } else {
    const checkedLength = $(
      ".searchList input[type='checkbox']:checked"
    ).length;
    const allLength = $(
      ".searchList input[type='checkbox']:not(.checkAll)"
    ).length;
    if (checkedLength === allLength) {
      $(".searchList input[type='checkbox'].checkAll").prop("checked", true);
    } else {
      $(".searchList input[type='checkbox'].checkAll").prop("checked", false);
    }
  }
});
