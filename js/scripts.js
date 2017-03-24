$(document).ready(function() {
  $(".hideinit").fadeToggle(1500);
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

      if (organizationSizeInput == 0) {
        $(".q1answer1").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q1answer1").fadeToggle(1500);
        }, delayMillis);
      } else {
        $(".q1answer2").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q1answer2").fadeToggle(1500);
        }, delayMillis);
      }

    });

    $("#formTwo").submit(function(event) {
      event.preventDefault();
      outsideAgencyInput = $("#2Q").val();
      $(".FormHide2").fadeToggle(1500);
      $(".FormHide3").fadeToggle(1500);

      if (outsideAgencyInput == 0) {
        $(".q2answer1").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q2answer1").fadeToggle(1500);
        }, delayMillis);
      } else {
        $(".q2answer2").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q2answer2").fadeToggle(1500);
        }, delayMillis);
      }


    });

    $("#formThree").submit(function(event) {
      event.preventDefault();
      whichEndInput = $("#3Q").val();
      $(".FormHide3").fadeToggle(1500);
      $(".FormHide4").fadeToggle(1500);

      if (whichEndInput == 0) {
        $(".q3answer1").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q3answer1").fadeToggle(1500);
        }, delayMillis);
      } else {
        $(".q3answer2").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q3answer2").fadeToggle(1500);
        }, delayMillis);
      }

    });

    $("#formFour").submit(function(event) {
      event.preventDefault();
      androidVsWindows = $("#4Q").val();
      $(".FormHide4").fadeToggle(1500);
      $(".FormHide5").fadeToggle(1500);

      if (whichEndInput == 0) {
        $(".q4answer1").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q4answer1").fadeToggle(1500);
        }, delayMillis);
      } else {
        $(".q4answer2").fadeToggle(1500);
        var delayMillis = 3000; //1 second
        setTimeout(function() {
          $(".q4answer2").fadeToggle(1500);
        }, delayMillis);
      }
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
