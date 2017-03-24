$(document).ready(function() {
    $("#formOne").submit(function(event) {
      alert("Submission successful!");
      event.preventDefault();
      var organizationSizeInput = $("#1Q").val();
      //alert(organizationSizeInput);
      var outsideAgencyInput = $("#2Q").val();
      //alert(outsideAgencyInput);
      var whichEndInput = $("#3Q").val();
      //alert(whichEndInput);
      var androidVsWindows = $("#4Q").val();
      //alert(androidVsWindows);
      var artyVsLogicInput = $("input:radio[name=arty]:checked").val();
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

      }

    });
});
