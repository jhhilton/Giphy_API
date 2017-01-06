$(function() {
    renderButtons(topics, 'pokemonButton', '#pokemonButtons');
});

var topics = ["Bulbasaur", "Charmander", "Squirtle", "Pidgey", "Pikachu", "Clefairy", "Jigglypuff"];

function renderButtons(topics, pokemonButton, pokemonButtons){   
    $(pokemonButtons).empty();

    for (var i = 0; i < topics.length; i++){
        
        var a = $('<button>');
        a.addClass(pokemonButton);
        a.addClass("btn");
        a.addClass("btn-success");
        a.attr('data-name', topics[i]);
        a.text(topics[i]);
        $(pokemonButtons).append(a);
    }
}

$(document).on('click', '.pokemonButton', function(){
    $('#pokemons').empty();
    $('.pokemonButton').removeClass('active');
    $(this).addClass('active');

    var name = $(this).data('name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
        
         var results = response.data;

         for(var i=0; i < results.length; i++){
             var pokemonDiv = $('<div class="pokemon-item">')

             var rating = results[i].rating;

             var p = $('<p>').text( "Rating: " + rating);

             var animated = results[i].images.fixed_height.url;
             var still = results[i].images.fixed_height_still.url;

             var pokemonImage = $('<img>');
             pokemonImage.attr('src', still);
             pokemonImage.attr('data-still', still);
             pokemonImage.attr('data-animate', animated);
             pokemonImage.attr('data-state', 'still')
             pokemonImage.addClass('pokemonImage');

             pokemonDiv.append(p)
             pokemonDiv.append(pokemonImage)

             $('#pokemons').append(pokemonDiv);
         }
    }); 
});

$(document).on('click', '.pokemonImage', function() {
    var state = $(this).attr('data-state'); 
    
    if ( state === 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

$('#addpokemon').on('click', function(){
    var newpokemon = $('input').eq(0).val();

    if (newpokemon.length > 2){
        topics.push(newpokemon);
    }

    renderButtons(topics, 'pokemonButton', '#pokemonButtons');

    return false;
});