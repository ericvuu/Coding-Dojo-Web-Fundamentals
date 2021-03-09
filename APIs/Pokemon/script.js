$(document).ready(function(){

  for(var i = 1; i < 152; i++){
    $("#oneFiveOne-pokemon").append(
      `<img id="${i}" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">`
    );

  }

     $(document).on("click", "img", function () {

      var pNum = $(this).attr('id');

      $.get(`https://pokeapi.co/api/v2/pokemon/${pNum}`, function(pokemon) {

        $("#poke-popup").append(`<h2>${pokemon.name}</h2>
          <img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pNum}.png">
          <ul>
          <h3>Types</h3>
          <li>${pokemon.types[0].type.name}</li>
          </ul>
          <h3>Types</h3>
          <p>${pokemon.types[0].type.name}</p>
          <h3>Height</h3>
          <p>${pokemon.height}</p>
          <h3>Weight</h3>
          <p>${pokemon.weight}</p>
        `);
       });
       $("#poke-popup").addClass("hidden");
       $("#poke-popup").html("");
      });
});
