$(document).ready(function(){
  $("img").click(function () {
     var newImg = $(this).attr("data-alt-src");
     $(this).attr("src", `img/${newImg}`);
  });
})
