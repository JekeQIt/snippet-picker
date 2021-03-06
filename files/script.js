queueViewModel.pageReady(function (data) {
  var pageid = $("body").attr("data-pageid");
  var culture = $("body").attr("data-culture");
  //  $("#logo").insertBefore("#main");

  if (pageid == "before") {
  }

  if (pageid == "queue") {
    $(
      '<div id="MainPart_divProgressbar_Progress_Runner" class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>'
    ).appendTo("#MainPart_divProgressbar_Progress");
    $(`<div class="progressbar queueElement multi-colored" data-bind="visible: layout.progressVisible">
          <div class="progress updated" style="width: 75%">
            <div  class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
          </div>
          <div class="clear"></div>
        </div>`).insertAfter(`#MainPart_divProgressbar`);
    $(`<div class="progressbar queueElement diagonal" data-bind="visible: layout.progressVisible">
          <div class="progress updated" style="width: 75%">
            <div  class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
          </div>
          <div class="clear"></div>
        </div>`).insertAfter(`.multi-colored`);
    $(`<div class="progressbar queueElement burst" data-bind="visible: layout.progressVisible">
          <div class="progress updated" style="width: 75%">
            <div  class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
          </div>
          <div class="clear"></div>
        </div>`).insertAfter(`.diagonal`);
    // radial progressbar
    $(
      '<div class="progressbar queueElement radial-progressbar"> ' +
        '<div class="radial-progressbar-background">' +
        "</div>" +
        '<div class="circle">' +
        '<div class="mask full updated">' +
        '<div class="mask fill"></div>' +
        "</div>" +
        '<div class="mask half">' +
        '<div class="mask fill"></div>' +
        '<div class="mask fill fix"></div>' +
        "</div>" +
        '<div class="shadow">' +
        "</div>" +
        "</div>" +
        '<div class="circle-inset">' +
        '<div class="contents "></div>' +
        "</div>" +
        "</div>"
    ).appendTo(".warning-box");
    $("#MainPart_divProgressbar_Progress_Runner").appendTo(".circle-inset");
    var radialPercent = queueViewModel.ticket.progress();
    radialPercent = radialPercent * 100;
    $(".circle-inset .contents").text(radialPercent + "%");
    $(".circle .mask.full, .circle .fill").css({
      transform: "rotate(" + (radialPercent * 3.6) / 2 + "deg)",
    });
    $(".circle .fill.fix").css({
      transform: "rotate(" + radialPercent * 3.6 + "deg)",
    });
    // End radial progressbar

    // shoe progressbar
    $(`<div class="progressbar queueElement shoe" data-bind="visible: layout.progressVisible">
          <div class="progress updated" style="width: 75%">
            <div  class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
          </div>
          <div class="clear"></div>
        </div>`).insertAfter(`.radial-progressbar`);
    //bracket progressbar
    $(`<div class="progressbar queueElement bracket" data-bind="visible: layout.progressVisible">
          <div class="progress updated" style="width: 75%">
            <div  class="runner" data-bind="css: { paused: layout.queueIsPausedVisible }"></div>
          </div>
          <div class="clear"></div>
        </div>`).insertAfter(`.burst`);

    // progress bar display loop
    // display STANDARD to begin with, add display none style to all divs but standard
    var progressBarDiv = $(".progressbar");
    for (let i = 0; i < progressBarDiv.length; i++) {
      progressBarName = progressBarDiv[i].classList[2];
      /* grabbing the 3rd class name and making it the option text */
      $(
        `<option value="${progressBarName}">${
          progressBarName[0].toUpperCase() + progressBarName.substring(1)
        }</option>`
      ).appendTo("#progressbarDropdown");
    }

    for (let i = 1; i < progressBarDiv.length; i++) {
      progressBarDiv[i].style.display = "none";
    }

    // adding button to display relevant code
    $(".relevant-btn").click(function () {
      $(".relevant-code").toggle();
      if ($("i").hasClass("fa-chevron-down")) {
        $("i").removeClass("fa-chevron-down");
        $("i").addClass("fa-chevron-up");
      } else {
        $("i").removeClass("fa-chevron-up");
        $("i").addClass("fa-chevron-down");
      }
    });

    // options functionality - hide other dropdowns if one is selected
    // when option is selected display the progress bar that is selected
    // if this.value = 'specified progress bar' remove display: none style to that element

    $(".plus-minus").click(function () {
      if ($(".progressbar-options").css("display") === "block") {
        $(".progressbar-options").hide(300);
        $(".plus-minus").removeClass("minus");
      } else {
        $(".plus-minus").addClass("minus");
        $(".progressbar-options").show(300);
      }
    });
    $("select").on("change", function () {
      $(`.progressbar`).hide();
      $("code").hide();
      $(".relevant-wrapper").show();
      if (this.value === "all") {
        $(`.progressbar`).show();
        $("#relevant-css").hide();
        $("#relevant-js").hide();
        $(".all").show();
      } else if (this.value === "radial-progressbar") {
        $(`.progressbar.${this.value}`).show();
        $("#relevant-js").show();
        $("#relevant-css").show();
        var htmlCode = $(`.progressbar.${this.value}`).prop("outerHTML");
        $("#relevant-js code").show();
        $("#relevant-js code").text(
          `$("#MainPart_divProgressbar").hide();
          $('${htmlCode}').appendTo(".warning-box");`
        );
        $(`#${this.value}`).show();
        $(".all").hide();
      } else {
        // Select all elements except those with class="selected value":
        $(`.progressbar.${this.value}`).show();
        $("#relevant-js").hide();
        $("#relevant-css").show();
        $(`#${this.value}`).show();
        $(".all").hide();
      }
    });
  }

  if (pageid == "after") {
  }

  if (pageid == "exit") {
  }

  if (pageid == "error") {
    var errorid = $("body").attr("data-errorid");

    if (errorid == "4") {
    }

    if (errorid == "5") {
    }
  }
});

//queueViewModel.modelUpdated(function (data) {
//});

//comes after pageReady
$(document).ready(function () {
  // $('#MainPart_ulProgressbarBox_Holder_Processbar').removeAttr('style')
  $(".width-slider").appendTo(".progressbar-options");
  $(".checkbox").appendTo(".progressbar-options");
});
