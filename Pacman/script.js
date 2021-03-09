
 $(document).ready(function(){

  var world = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,1,1,1,1,1,0],
    [0,1,1,0,1,0,0,1,1,0],
    [0,1,1,0,1,0,0,1,1,0],
    [0,1,1,0,1,0,0,1,1,0],
    [0,1,1,0,0,0,1,1,1,0],
    [0,1,1,1,1,1,1,0,1,0],
    [0,1,1,0,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0]
  ];

  var worldDict = {
    0: "brick",
    1: "coin",
    2: "pacman"
  }


  function displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
      output += '<div class="row">';
      for (var j = 0; j < world[i].length; j++) {
        output += `<div class="${worldDict[world[i][j]]}"></div>`
      }
      output += "</div>";
    }

    $("#world").html(`${output}`);

  }

  displayWorld();


   document.onkeydown = function (e) {
     if (e.keyCode == 37) {
       document.getElementById("pacman").style.left = 50 + "px";
     }
   };

  })
