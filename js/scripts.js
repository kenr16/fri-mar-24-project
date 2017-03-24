$(document).ready(function() {
    $("#formOne").submit(function(event) {
      alert("Submission successful!");
      event.preventDefault();
      organizationSizeInput = $("#1Q").val();
    });

    $("#formTwo").submit(function(event) {
      alert("Submission successful!");
      event.preventDefault();
      outsideAgencyInput = $("#2Q").val();
    });

    $("#formThree").submit(function(event) {
      alert("Submission successful!");
      event.preventDefault();
      whichEndInput = $("#3Q").val();
    });

    $("#formFour").submit(function(event) {
      alert("Submission successful!");
      event.preventDefault();
      androidVsWindows = $("#4Q").val();
    });

    $("#formFour").submit(function(event) {
      alert("Submission successful!");
      event.preventDefault();
      artyVsLogicInput = $("input:radio[name=arty]:checked").val();


      //alert(artyVsLogicInput);

      // var thisVar = parseInt($("input:radio[name=orgsize]:checked").val());
      //if (organizationSizeInput == 0 && whichEndInput == 0){
      //  $('.cssDiv').show();
      //}

      if (organizationSizeInput == 0) {
        if (whichEndInput == 0){
          $('.cssDiv').show();
          return
        } else {
          $('.rubyDiv').show();
          return
        }
      } else {
        if (outsideAgencyInput == 0){
          $('.phpDiv').show();
          return
        } else if (androidVsWindows == 0) {
          $('.javaDiv').show();
          return
        } else if (androidVsWindows == 1) {
          $('.cDiv').show();
          return
        }
      } //This ends the else attached to the first if statement
    });
});
