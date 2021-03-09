$(document).ready(function(){

  $("img").hover(function(){
    var imgArr = [
      "images/forest.jpg",
      "images/lake.jpg",
      "images/mountain.jpg",
      "images/ocean.jpg",
    ];

    var size = imgArr.length;
    var position = Math.floor(size * Math.random());

    var newImage = imgArr[position];

    console.log(newImage)

    $(this).attr("src", `${newImage}`);

  }, function(){
    var revert = $(this).attr("data-alt-src");
    console.log(revert);

    $(this).attr("src", `${revert}`);
  })
})
