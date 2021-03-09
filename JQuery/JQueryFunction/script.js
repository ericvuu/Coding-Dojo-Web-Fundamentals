
  $(document).ready(function(){

    $("#section-one").hide().fadeIn(10000);
    $("#section-four").fadeOut(9000);


    $("div").addClass("container");
    $("p").css("display", "inline-block");
    $("button").addClass("button-style");

    $("div").click(function(){
      $("#section-one, #section-three").css("background-color", "white");
      $("hr").css("background-color", "rgb(7, 167, 7)");
      $("#section-one > img").slideDown(1000);
    })

    $("img").hide();

    $("#section-three").click(function(){
       $("#section-four").fadeIn(10000);
       $("#section-four").html("<ul></ul>");
    })

    $('#section-four').mouseenter(function(){
      $("#section-four > ul").after("<li>Hello!</li>");
    })

    $("#section-one").click(function(){
      $("section-one > p").before("<h3>clicking me adds a new heading!</h3>")
    })


    // button clicks

    $("#classButton").click(function(){
      alert($("#classButton").attr("id"));
      $("#section-one > p").addClass("bigger");
      $("#section-one > img").slideUp(1000);
    })

    $("#slideToggle").click(function(){
      $("img").toggle(function(){
        $("this").show();
      })
      $("#section-two > p").toggle(function(){
        $("this").hide();
      })
    })

    $("#appendButton").click(function () {
      $("#section-three > p").append("<p>This is a new paragraph!</p>");
    });
  })
