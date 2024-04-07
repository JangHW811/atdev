$(document).on(
  "change",
  "#userSearch .searchList input[type='checkbox']",
  function () {
    const checked = $(this).prop("checked");
    if ($(this).hasClass("checkAll")) {
      $("#userSearch .searchList input[type='checkbox']").prop(
        "checked",
        checked
      );
    } else {
      const checkedLength = $(
        "#userSearch .searchList input[type='checkbox']:checked"
      ).length;
      const allLength = $(
        "#userSearch .searchList input[type='checkbox']:not(.checkAll)"
      ).length;
      if (checkedLength === allLength) {
        $("#userSearch .searchList input[type='checkbox'].checkAll").prop(
          "checked",
          true
        );
      } else {
        $("#userSearch .searchList input[type='checkbox'].checkAll").prop(
          "checked",
          false
        );
      }
    }
  }
);

$(document).on("click", "#userSearch .submit", function () {
  const callback = modalObject["userSearch"].callback;
  const checkedList = $(
    "#userSearch .searchList input[type='checkbox']:checked"
  );
  const checkedNameList = checkedList.map((item) => {
    item.closest("tr").find(".name").text();
  });

  console.log(checkedNameList);
  callback(checkedNameList);
  closeModal();
});
