/*There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.*/

//numers to guess
//number of wins
//number of losses
//number to grandtotal

//Four crystals shown as buttons
//Each crystal will be a picture containing a function


//Random number (RandomNum) shows when Game Starts

//When crystal gets an .onclick , the SCORE will increment ++ on the Total Score
//When clicked update the PlayersScore

//User wins when PlayersScore === RandomNum

//The player looses if the PlayerScore goes over the RandomNum

//Game restarts when Player Wins or Looses

//When game restarts, Everything will reset

function randomNumGen(min,max) {
	 return Math.floor(Math.random()*(max-min+1)+min)
}


$(document).ready(function(){
											//(max-min+1)+1
	// var targetNum = Math.floor(Math.random()*(120-19+1)+19);
	var targetNum = randomNumGen(19,120);
	$("#target-number").text(targetNum);
	console.log("targetNum", targetNum);

	var wins = 0;
	$("#wins").text(wins);
	
	var losses = 0;
	$("#losses").text(losses);

	function randomGemArr() {
		var gemArr = [];
	//This while loop generates 4 random numbers
		while (gemArr.length<4) {
			// var ranNum =  Math.floor(Math.random()*(12-1+1)+1);
			var ranNum = randomNumGen(1,12);
			//if the number repeats twice then returned as false
			if (gemArr.indexOf(ranNum) === -1) {
				//now we push the number to the aray
				gemArr.push(ranNum);
			}
		} 

		$("#crystal-1").val(gemArr[0]);
		$("#crystal-2").val(gemArr[1]);
		$("#crystal-3").val(gemArr[2]);
		$("#crystal-4").val(gemArr[3]);

		console.log("gemArr",gemArr);

}

randomGemArr();

var total = 0;
$("#total").text(total);

$(".crystal").on("click", function() {
	$("#alert").text(" ");
	// var btnHit = $(this).attr("id");
	var btnHit = parseInt($(this).val());
	console.log("btnHit", btnHit);
	total += btnHit;
	$("#total").text(total);

	if (total > targetNum) {
		losses++;
		$("#losses").text(losses);
		// alert("Too bad too sad! You LOST!");
		$("#alert").text("Too bad too sad! You LOST!");
		reset();
	}

	else if (total === targetNum) {
		wins++;
		$("#wins").text(wins);
		// alert("Yeaaaa Boyyyy!");
		$("#alert").text("Yeaaaa Boyyyy!");
		reset();
	}

});

function reset() {
	targetNum = randomNumGen(19,120);
	$("#target-number").text(targetNum);
 	total = 0;
	$("#total").text(total);
	// $("#alert").text("");

	randomGemArr();
}


				
});										