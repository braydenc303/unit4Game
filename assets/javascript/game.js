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
    $(".crystals img:last-child").remove();
    $(".crystals img:last-child").remove();
    $(".crystals img:last-child").remove();
    $(".crystals img:last-child").remove();
    makeCrystals();
    goal = Math.floor(((Math.random() * 100) + 1) + 19);
    score = 0;
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
        image.attr("src", images[Math.floor(Math.random() * images.length)]);
        $(".crystals").append(image);
    }
}





// Main Process--------------------------------------

$(document).ready(function() {
    resetGame();

    $(document).on("click", ".crystal", function(){
        var val = ($(this).attr("crystalval"));
        val = parseInt(val);
        score += val;
        $(".score").text(score);

        if (score === goal) {
            wins++;
            alert("Congratulations!\nYou matched the goal of " + goal +".\nYou won that round!");
            resetGame();
        } else if (score > goal) {
            losses++;
            alert("You overshot the goal of "+ goal + ".\nYou lost that round.");
            resetGame();
        }
    });



});



