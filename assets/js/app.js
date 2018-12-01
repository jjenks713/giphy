// array of bands list
var bandsList = ["The Beatles", "Journey", "Leftover Salmon", "Glass Animals", "Boston", "Two Feet",
 "Muse", "Coldplay", "The Chainsmokers", "AC/DC", "The Monkees", "Pantera"];

// function to diplay GIFS 

function displayBandGif() {
    var band = $(this).attr("data-name");
    var queryURL = "https://www.api.giphy.com?q=" + band + "&limit=10&rating=pg&api_key:=0EJh1JaP6Pcac4av6g129chc4TT3ibH3";
    // var queryURL = "https://www.omdbapi.com/?t=" + band + "&y=&plot=short&apikey=trilogy";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        
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
$("#add-band").click(function(event) {
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
$("#reset").click(function() {    
    showButtons();
})
