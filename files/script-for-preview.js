$(document).ready(function () {
  if (
    queueViewModel.eventId === "preview-layout" ||
    queueViewModel.eventId === "testevent"
  ) {
    console.log("preview");
    var pageid = $("body").attr("data-pageid");

    if (pageid == "queue") {
      $("#reminderStatusMesage").after(
        '<label class="cblabel queueElement width-slider">' +
          '<input type="range" value="75" id="progressWidthInput" max="100" min="0">' +
          '<span class="title">&nbsp Width of progress bar</span>' +
          '<span class="qmark">?' +
          '<span class="tooltip">Change the width of the progress bar</span>' +
          "</span>" +
          "</label>" +
          `<label class="cblabel queueElement checkbox">
          <input class="update-state" type="checkbox" >
          Progessbar updating state
          <span class="qmark">?
            <span class="tooltip">Click to see the progressbar in the updating state/span></span>
        </label>`
      );

      //prgressbar length
      $("#progressWidthInput").change(function () {
        var inputWidth = $("#progressWidthInput").val();
        console.log(inputWidth);
        $(".progress")
          .removeAttr("style")
          .attr("style", "width:" + inputWidth + "%");
        var radialPercent = inputWidth / 100;
        radialPercent = radialPercent * 100;
        $(".circle-inset .contents").text(radialPercent + "%");
        $(".circle .mask.full, .circle .fill").css({
          transform: "rotate(" + (radialPercent * 3.6) / 2 + "deg)",
        });
        $(".circle .fill.fix").css({
          transform: "rotate(" + radialPercent * 3.6 + "deg)",
        });
      });
      //updating state checkbox
      $(".update-state").change(function () {
        if (!$(".progress").hasClass("updated")) {
          console.log("adding updated class.");
          $(".progress").addClass("updated");
        } else {
          $(".progress").removeClass("updated");
        }
      });
      //do something when paused button clicked.
      // $("#PreviewStatesContent label:nth-child(4) input").change(function () {});
      $(`<div id="logoUploadContainer">
      <label id="logoUploadLabel">Upload Logo</label>
      <input type="file" name="logo" id="logoUpload">
      </div>`).insertAfter("#reminderStatusMesage");
    }
  }
});
// var once = true;
// queueViewModel.modelUpdated(function (data) {
//   if (once) {
//     console.log(data);
//     once = false;
//   }
// });
