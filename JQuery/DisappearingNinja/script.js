$(document).ready(function(){

  $("img").addClass("img-box");

  $("button").css({
    "padding": ".5%",
    "font-size": "18px",
    "background-color": "#4CAF50",
    "box-shadow": "2px 3px #88c999",
    "border-radius": "8%",
  });

  $("img").click(function(){
    $(this).hide(1000);
  })

  $("button").click(function(){
    $("img").show(1000);
  })
})
