$(document).ready(() => {
  $("#registModal .fileDrop")
    .on("dragenter", function (e) {
      e.preventDefault();
      e.stopPropagation();
    })
    .on("dragover", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this)
        .removeClass("grayOpacity12Background")
        .addClass("primaryOpacity12Background");
    })
    .on("dragleave", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this)
        .removeClass("primaryOpacity12Background")
        .addClass("grayOpacity12Background");
    })
    .on("drop", function (e) {
      e.preventDefault();

      $(this)
        .removeClass("primaryOpacity12Background")
        .addClass("grayOpacity12Background");
      const files = e.originalEvent.dataTransfer.files;
      $(this).find("#fileupload").prop("files", files);
      $(this).find(".fileUploadTemplate").hide();
      $(this).find(".fileName").show().text(files[0].name);
      $("#registModal .removeFile").show();
      $(this)
        .closest(".inputContainer")
        .find(".fileSize")
        .text((files[0].size / 1024 / 1024).toFixed(1));
    });

  $("#registModal #fileupload").on("change", function () {
    const files = $(this).prop("files");
    $(this).closest(".fileDrop").find(".fileUploadTemplate").hide();
    $(this).closest(".fileDrop").find(".fileName").show().text(files[0].name);
    $("#registModal .removeFile").show();
    $(this)
      .closest(".inputContainer")
      .find(".fileSize")
      .text((files[0].size / 1024 / 1024).toFixed(1));
  });

  $("#registModal .removeFile").on("click", function (event) {
    event.stopPropagation();
    $(this).closest(".inputContainer").find(".fileUploadTemplate").show();
    $(this).closest(".inputContainer").find(".fileName").hide().text("");
    $(this).closest(".inputContainer").find("#fileupload").prop("files", null);
    $(this).hide();
    $(this).closest(".inputContainer").find(".fileSize").text("0");
  });

  $("#registModal .submit").on("click", function () {
    const callback = modalObject["registModal"]?.callback;

    callback && callback(resultList);
    closeModal(this);
  });
});
