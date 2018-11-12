// Variables-----------------------------------------

    // stores goal for current round
    var goal = 0;

    // stores player's current score
    var score = 0;
    
    // stores number of rounds won
    var wins = 0;
    
    // stores number of rounds lost
    var losses = 0;
    
    // stores the image addresses for the crystals
    var images = ["assets/images/red.png", "assets/images/green.png", "assets/images/purple.png", "assets/images/yellow.png"];



// Functions-----------------------------------------

function resetGame() {
    goal = Math.floor(((Math.random() * 100) + 1) + 19);
    $(".goal").text(goal);
    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".score").text(score);
}

function makeCrystals() {
    var arr = [1,2,3,4];
    for (var i = 0; i < arr.length; i++) {
        var image = $("<img>");
        image.addClass("crystal");
        image.attr("crystalval", Math.floor((Math.random() * 10) + 1));
        image.attr("src", images[i]);
        $(".crystals").append(image);
    }
}





// Main Process--------------------------------------

$(document).ready(function() {
    resetGame();
    makeCrystals();







});



