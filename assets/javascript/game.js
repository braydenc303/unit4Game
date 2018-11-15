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

// When the game begins again, the player should see a new random number. 
// Also, all the crystals will have four new hidden values. Of course, the 
// user's score (and score counter) will reset to zero.
function resetGame() {
    $(".crystals").empty();
    // $(".crystals img:last-child").remove();
    // $(".crystals img:last-child").remove();
    // $(".crystals img:last-child").remove();
    makeCrystals();
    goal = Math.floor(((Math.random() * 101) + 1) + 19);
    score = 0;
    $(".goal").text(goal);
    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".score").text(score);
}

// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
function makeCrystals() {
    var arr = [1,2,3,4];
    for (var i = 0; i < arr.length; i++) {
        var image = $("<img>");
        image.addClass("crystal");
        // Each crystal should have a random hidden value between 1 - 12.
        image.attr("crystalval", Math.floor((Math.random() * 12) + 1));
        image.attr("src", images[Math.floor(Math.random() * images.length)]);
        $(".crystals").append(image);
    }
}





// Main Process--------------------------------------

$(document).ready(function() {
    resetGame();

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.

    $(document).on("click", ".crystal", function(){
        var val = $(this).attr("crystalval");
        console.log(val);
        val = parseInt(val);
        score += val;
        $(".score").text(score);

        // The player wins if their total score matches the random number from the beginning of the game.
        if (score === goal) {
            wins++;
            alert("Congratulations!\nYou matched the goal of " + goal +".\nYou won that round!");
            // The game restarts whenever the player wins or loses.
            // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
            resetGame();
            // The player loses if their score goes above the random number.
        } else if (score > goal) {
            losses++;
            alert("You overshot the goal of "+ goal + ".\nYou lost that round.");
            // The game restarts whenever the player wins or loses.
            // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
            resetGame();
        }
    });



});



