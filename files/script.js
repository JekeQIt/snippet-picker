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
        
    //progress bar drowpdown
    $('<div class="center-div">' +
      '<label for="progressbar-dropdown"> Progress Bars: </label>' + 
      '<select name="progressbar-dropdown" id="progressbarDropdown">' +
        '<option value="all">All</option>' +
      '</select>' +
      '</div>').insertAfter("#divConfirmRedirectModal");

    var progressBars = $(".progressbar");
    for (let i = 0; i < progressBars.length; i++) {
      progressBarName = progressBars[i].classList[2]; 
      /* grabbing the 3rd class name and making it the option text */
      if(progressBarName === undefined) {
        progressBarName = 'standard';
      }
      $(`<option value="${progressBarName}">${progressBarName[0].toUpperCase() + 
        progressBarName.substring(1)}</option>`).appendTo("#progressbarDropdown");
    }
    
    // options functionality - hide other dropdowns if one is selected 


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
