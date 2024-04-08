$(document).ready(() => {
  $("#registModal .searchList input[type='checkbox']").on(
    "change",
    function () {
      const checked = $(this).prop("checked");
      if ($(this).hasClass("checkAll")) {
        $("#registModal .searchList input[type='checkbox']").prop(
          "checked",
          checked
        );
      } else {
        const checkedLength = $(
          "#registModal .searchList input[type='checkbox']:checked"
        ).length;
        const allLength = $(
          "#registModal .searchList input[type='checkbox']:not(.checkAll)"
        ).length;
        if (checkedLength === allLength) {
          $("#registModal .searchList input[type='checkbox'].checkAll").prop(
            "checked",
            true
          );
        } else {
          $("#registModal .searchList input[type='checkbox'].checkAll").prop(
            "checked",
            false
          );
        }
      }
    }
  );

  $("#registModal .submit").on("click", function () {
    const callback = modalObject["registModal"]?.callback;
    const checkedList = $(
      "#registModal .searchList input[type='checkbox']:checked"
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
