$(document).ready(() => {
  $("#userSearch .searchList input[type='checkbox']").on("change", function () {
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
  });

  $("#userSearch .submit").on("click", function () {
    const callback = modalObject["userSearch"]?.callback;
    const checkedList = $(
      "#userSearch .searchList input[type='checkbox']:checked"
    );

    const resultList = [];
    checkedList.each((index, element) => {
      const name = $(element).closest("tr").find(".name").text();
      resultList.push(name);
    });

    callback && callback(resultList);
    closeModal(this);
  });
});
