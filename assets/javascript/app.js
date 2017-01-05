// animalsButtons = document.getElementById("btn-group");
// var animals = ["Turtle", "Eagle", "Salmon", "Chicken", "Panda", "Racoon"];

// for(var i = 0; i < animals.length; i++)
// {
//        document.write("<button type='button' class='btn btn-success " + animals[i] + "'>" + animals[i] + "</button>");
// }

    $("button").on("click", function() {
      var person = $(this).data("person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(queryURL);
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          $("#gifs-appear-here").empty();
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height_still.url);
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });


// for(var i = 0; i < animals.length; i++)
// {
//        document.write("<button type='button' class='btn btn-success " + animals[i] + "'>" + animals[i] + "</button>");
// }



// function myFunction(item, index) {
//     animalsButtons.innerHTML = animalsButtons.innerHTML + item + "<br>"; 
// }