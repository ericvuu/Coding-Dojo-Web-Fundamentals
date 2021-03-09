$(document).ready(function(){
   $("#title").hide().delay(3000).fadeIn(3500);
   $("#left-bottom, #right-bottom").hide().delay(4000).fadeIn(4000);
   $("footer").hide().delay(5000).fadeIn(5000);

   // drop-down menu
   $("#menu").click(function(){
      $("#dropdown-menu").toggle().removeClass("hidden");
      // remove title when dropdown appears
      $('#title').toggle(function(){
         $("#title").addClass("hidden");
      })
   })

   // pop-up registration form
   $("#registration").click(function () {
     $("#registration-form").toggle().removeClass("hidden");
     // remove title when popup appears
     $("#title").toggle(function () {
       $("#title").addClass("hidden");
     });

   });



   // hover over contact icon
    $("#icon-container > li").hover(function(){
       $(this).css("color", "white");
    },
     function() {
        $(this).css("color", "black");
    });

     $("#subscribe").click(function () {
       alert("Thank you for your subscribing");
     });

     $("form").submit(function () {
       alert("Thank you for your reservation request!");
       return false;
     });

})
