$(document).ready(function() {
    $("#formName").submit(function(event) {
      event.preventDefault();
      var name1Input = $("input#firstname").val();
      var name2Input = $("input#lastName").val();
      $(".firstNameSite").text(name1Input + " ");
      $(".lastNameSite").text(name2Input);
      $(".FormHide0").fadeToggle(1500);
      $(".FormHide1").fadeToggle(1500);
    });

    $("#formOne").submit(function(event) {
      event.preventDefault();
      organizationSizeInput = $("#1Q").val();
      $(".FormHide1").fadeToggle(1500);
      $(".FormHide2").fadeToggle(1500);
    });

    $("#formTwo").submit(function(event) {
      event.preventDefault();
      outsideAgencyInput = $("#2Q").val();
      $(".FormHide2").fadeToggle(1500);
      $(".FormHide3").fadeToggle(1500);
    });

    $("#formThree").submit(function(event) {
      event.preventDefault();
      whichEndInput = $("#3Q").val();
      $(".FormHide3").fadeToggle(1500);
      $(".FormHide4").fadeToggle(1500);
    });

    $("#formFour").submit(function(event) {
      event.preventDefault();
      androidVsWindows = $("#4Q").val();
      $(".FormHide4").fadeToggle(1500);
      $(".FormHide5").fadeToggle(1500);
    });

    $("#formFive").submit(function(event) {
      event.preventDefault();
      var artyVsLogicInput = $("input:radio[name=arty]:checked").val();
      $(".FormHide5").fadeToggle(1500);

      if (artyVsLogicInput == 0){
        $(".skillSite").text("artistic gifts");
      } else {
        $(".skillSite").text("logical thinking");
      }



      if (organizationSizeInput == 0) {
        if (whichEndInput == 0){
          $(".cssDiv").fadeToggle(1500);
          return
        } else {
          $(".rubyDiv").fadeToggle(1500);
          return
        }
      } else {
        if (outsideAgencyInput == 0){
          $(".phpDiv").fadeToggle(1500);
          return
        } else if (androidVsWindows == 0) {
          $(".javaDiv").fadeToggle(1500);
          return
        } else if (androidVsWindows == 1) {
          $(".cDiv").fadeToggle(1500);
          return
        }
      } //This ends the else attached to the first if statement
    });
});
