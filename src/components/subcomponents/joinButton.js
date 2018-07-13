//make this once our database is for real
//this is an update to an existing collection, or game. this will add the name, 
//a default score of 0, and default photos as none
//this is done as an mongoose ajax call 
//should automacially insert the creator of the game as the first player
//need a route for this

$("button").click(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/pages/test/",
        data: {
            id: $(this).val(), // < note use of 'this' here
            access_token: $("#access_token").val()
        },
        success: function (result) {
            alert('ok');
        },
        error: function (result) {
            alert('error');
        }
    });
});