// Grab the articles as a json

$.getJSON("/Users", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#Users").append("" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
  });
  
  
  // Whenever someone clicks a p tag
  $(document).on("click", "p", function() {
    // Empty the notes from the note section
    $("#Cards").empty();
    // Save the id from the p tag
    var thisId = $(this).attr("data-id");
  
    // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      url: "/Users/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
        console.log(data);
        // The title of the article
        $("#Cards").append("<h2>" + data.title + "</h2>");
        // An input to enter a new title
        $("#Cards").append("<input id='titleinput' name='title' >");
        // A textarea to add a new note body
        $("#Cards").append("<textarea id='bodyinput' name='body'></textarea>");
        // A button to submit a new note, with the id of the article saved to it
        $("#Cards").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
        // If there's a note in the article
        if (data.card) {
          // Place the title of the note in the title input
          $("#titleinput").val(data.card.title);
          // Place the body of the note in the body textarea
          $("#bodyinput").val(data.card.body);
        }
      });
  });
  
  // When you click the saveimage button
  $(document).on("click", "#saveimage", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");
  
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "POST",
      url: "/Users/" + thisId,
      data: {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
      }
    })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
        // Empty the notes section
        $("#Cards").empty();
      });
  
    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });
  