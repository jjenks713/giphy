// array of bands list
var bandsList = ["The Beatles", "Journey", "Leftover Salmon", "Glass Animals", "Boston", "Two Feet",
    "Muse", "Coldplay"];

// function to diplay GIFS 
function displayBandGif() {
    var band = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + band + "&limit=10&api_key=0EJh1JaP6Pcac4av6g129chc4TT3ibH3";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;

        // loop to display all 10 gifs
        for (let i = 0; i < results.length; i++) {
            var bandDiv = $("<div class='float-left img-divs'>");
            var bandImg = $("<img class='images-class' id='img' data-state='still'>");
            var p = $("<p>");
            p.html("<h3 class='text-light'>Rating: " + results[i].rating + "<h3>");
            bandImg.attr("src", results[i].images.fixed_height_still.url);
            bandDiv.append(p);
            bandDiv.append(bandImg);
            $("#band-gifs").append(bandDiv);
            console.log(results[i]);

            // function to click and animate each gif
            bandDiv.on("click", "img", function() {
                var state = $("#img").attr("data-state")
                if (state === "still") {
                    $(this).attr("src", results[i].images.fixed_height.url);
                    $(this).attr("data-state", "animate");
                  } else {
                    $(this).attr("src", results[i].images.fixed_height_still.url);
                    $(this).attr("data-state", "still");
                  }
            
                console.log(this);
            })

        }
    })
}


// function to show buttons
function showButtons() {
    $("#buttons-view").empty();

    // loop that appends a button for each string in the array.
    for (var i = 0; i < bandsList.length; i++) {
        // $("#buttons-view").append("<button class='btn btn-dark'>" + bands[i] + "</button> ");
        console.log(bandsList[i]);
        var a = $("<button class='btn btn-dark'></button> ");
        a.addClass("band-btn");
        a.attr("data-name", bandsList[i]);
        a.html("<h4>" + bandsList[i] + "</h4>");
        $("#buttons-view").append(a);
    }
}


// function to add buttons from form
$("#add-band").click(function (event) {
    event.preventDefault();
    var band = $("#band-input").val().trim();
    bandsList.push(band);
    showButtons();
})

// on click function for all buttons
$(document).on("click", ".band-btn", displayBandGif);

// displaying original button array
showButtons()

// reset function
$("#reset").click(function () {
    showButtons();
})
