queueViewModel.pageReady(function (data) {
  var pageid = $("body").attr("data-pageid");
  var culture = $("body").attr("data-culture");
  //  $("#logo").insertBefore("#main");

  if (pageid == "before") {
  }

  if (pageid == "queue") {
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
    $(".circle .fill.fix").css({ transform: "rotate(" + radialPercent * 3.6 + "deg)" });
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
    //progress bar drowpdown - dynamically add options
    $('<div class="center-div">' +
        '<select name="progressbar-dropdown" id="progressbarDropdown">' +
          '<option value="" disabled selected>Select Progress Bar</option>' +
          '<option value="all">All</option>' +
        '</select>' +
      '</div>').insertAfter("#divConfirmRedirectModal");

    var progressBarDiv = $(".progressbar");
    for (let i = 0; i < progressBarDiv.length; i++) {
      progressBarName = progressBarDiv[i].classList[2];
      /* grabbing the 3rd class name and making it the option text */
      $(`<option value="${progressBarName}">${progressBarName[0].toUpperCase() + progressBarName.substring(1)}</option>`).appendTo("#progressbarDropdown");
    }

    // progress bar display loop
    // display STANDARD to begin with, add display none style to all divs but standard
    // 
    for (let i = 1; i < progressBarDiv.length; i++) {
      progressBarDiv[i].style.display = "none";
    }


    // options functionality - hide other dropdowns if one is selected
    // when option is selected display the progress bar that is selected 
    // if this.value = 'specified progress bar' remove display: none style to that element 
    
    $('select').on('change', function() {
      $(`.progressbar`).css("display", "")
      if(this.value === 'all') {
        for (let i = 0; i < progressBarDiv.length; i++) {
          progressBarDiv[i].style.display = "";
        }
      } else {
        // Select all elements except those with class="selected value":
        $(`.progressbar:not(.${this.value})`).css("display", "none");
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

// $(document).ready(function(){
//   $('#MainPart_ulProgressbarBox_Holder_Processbar').removeAttr('style')
// })
