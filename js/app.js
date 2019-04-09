console.log("createnewbirdcreatenewbirdcreatenewbirdcreatenewbirddddd");
// Completed:
//stop animation for items that are done
//game over logic
//Refactoring code

//In progress:
//Fix: only the first item that gets clicked appends to basket


//To be completed:
//fix logic for stopping the timer (clearInterval isnt working)
//fix Time is up message (not centered) and remove the items that keep spawning
//new round - complete logic (new set of characters)
//lose life - needs better logic
//fix animation in basket issue
//create logic for starting the game
//Timer - push stats to teh scoreboard


//If time allows:
//second player game
//compare player stats
//create logic for win game


//GAME: Help your friends Escape to safety! Round 1 - practice; Round 2 - pets; Round 3 - knowledge
//You got a telegram saying your friends have been 
//captured by evil ... They are planning a mass escape. Are you prepared to help them
//get to safety? 



class Player {
	constructor() {
		this.lives = 0;
		this.score = 0;
		this.round = 1;

	}

}

class Item {
	constructor(number) {
		this.number = number;	
	}

}


const game = {
	playerOneStats: null, //will be used when player 1 is done
	playerTwoStats: null, //will be used when player 2 is done

	clock: null,
	lives: 3,
	round: null,
	score: null,
	characterEssence: null,
	itemEssence: null,
	timerId: null,
	roundStarted: false,
	birdFalling: false,
	platipussFalling: false,
	pupFalling: false,
	heartFalling: false,
	cancelAnimation: false,


	startGame () {
		const alice = new Player()
		this.characterEssence = alice

		this.startTimer()
		this.rollItems()
		console.log(alice);
		this.round++
		$('#round').text("Round: " + this.round)
	
	},


	startTimer() {
		setInterval(

			() => {	
				console.log("clock " + this.clock);
				this.clock++
				this.rollItems()
				this.stopTimer()
			},

			1000
			)
	},

	stopTimer() {
		if (this.clock === 10) {
			$('#scoreboard').empty()
			$('#scoreboard').append(`Time is up!`).css('font-size', '30px')
			// $('#item1container').remove()
			// $('#item2container').remove()
			// $('#item3container').remove()
			// $('#item4container').remove()
			clearInterval(this.timerId)
			this.roundStarted = false;
		}
	},

	createNewBird () {
		const $newBird = $('<div id="item1">')
		$('#left-top-corner-container .character-container').append($newBird)
	},

	createBirdForBasket () {
		const $newBasketBird = $('<div id="item11">')
		$('#basket1').append($newBasketBird)
	},

	createNewPlatipuss () {
		const $newPlatipuss = $('<div id="item2">')
		$('#right-top-corner-container .character-container').append($newPlatipuss)

	},
	createPlatipussForBasket () {
		const $newBasketPlatipuss = $('<div id="item22">')
		$('#basket1').append($newBasketPlatipuss)
	},

	createNewPup () {
		const $newPup = $('<div id="item3">')
		$('#left-botom-corner-container .character-container').append($newPup)

	},

	createPupForBasket () {
		const $newBasketPup = $('<div id="item33">')
		$('#basket1').append($newBasketPup)
	},

	createNewHeart () { 
		const $newHeart = $('<div id="item4">')
		$('#right-bottom-corner-container .character-container').append($newHeart)

	},

	createHeartForBasket () {
		const $newBasketHeart = $('<div id="item44">')
		$('#basket1').append($newBasketHeart)
	},

	rollItems () {

		const randItem = Math.floor((Math.random() * 4) + 1)
		console.log(randItem)
		const newItem = new Item(randItem)
		this.itemEssence = newItem

		if(this.itemEssence.number === 1) {
			this.animateItem1()
		}

		if(this.itemEssence.number === 2) {
			this.animateItem2()
			}

		if(this.itemEssence.number === 3) {
			this.animateItem3()
		}

		if(this.itemEssence.number === 4) {
			this.animateItem4()
		}

	},

	animateItem1 () { 
		if (this.clock % 2 === 0) {
			this.birdFalling = true
			$('#item1').animate ({
			"left": "200px",
			}, 3000, () => {			
				this.birdFalling = false
				$('#item1').remove()
				this.createNewBird();
			});
		}
	},

	animateItem2 () { 
		if (this.clock % 2 === 0) {
			this.platipussFalling = true
			$('#item2').animate ({
				"right": "200px",
			}, 3000, () => {
				platipussFalling = false
				$('#item2').remove()
				this.createNewPlatipuss()
			});
		}
	},

	animateItem3 () { 
		if (this.clock % 2 === 0){
			this.pupFalling = true
			$('#item3').animate ({
				"left": "200px",
			}, 3000, () => {
				this.pupFalling = false
				$('#item3').remove()
				this.createNewPup()
			});
		}
	},

	animateItem4 () {
		if (this.clock % 2 === 0) {
			this.heartFalling = true
			$('#item4').animate ({
				"right": "200px",
			}, 3000, () => {
				this.heartFalling = false
				$('#item4').remove()
				this.createNewHeart()
			});
		}
	},

	touchItem1 () { 
			this.score++
			$('#score').text("Score: " + this.score)
			this.createBirdForBasket()
			$('#item1').remove()
			// $('#item1').stop()
			// $('#basket1').append($('#item1'))
			this.createNewBird()
			
	},

	touchItem2 () {
			this.score++
			$('#score').text("Score: " + this.score)
			this.createPlatipussForBasket()
			$('#item2').remove()
			// $('#item2').stop()
			// $('#basket1').append($('#item2'))
			this.createNewPlatipuss()
	},

	touchItem3 () {
			this.score++
			$('#score').text("Score: " + this.score)
			this.createPupForBasket()
			$('#item3').remove()
			// $('#item3').stop()
			// $('#basket1').append($('#item3'))
			
			this.createNewPup()
	},
	touchItem4 () {
			this.score++
			$('#score').text("Score: " + this.score)
			this.createHeartForBasket()
			$('#item4').remove()
			// $('#item4').stop()
			// $('#basket1').append($('#item4'))
			
			
			this.createNewHeart()
			
	},

	loseLife () {
			this.lives--
			$('#lives').text("Lives: " + this.lives)
			if (this.lives === 0) { 
			$('#basket-container').empty()
			$('#basket-container').text("Aw buddy you let them down... Wanna try again?")
		}
	},


	nextRound () {

	},

	loseGame () {
		if (this.lives === 0) { 
		$('#game-container').remove()
		}
	},

	winGame () {

	}
}


	
// game.startGame();
// game.stopTimer()
// game.moveLeftUp()
// game.scoreUp()
// game.rollItems()
// game.startTimer()
// game.makeItems()
// game.loseGame()
// game.createNewBird()




$('#item1').on('click', function(event) {
	console.log(event.target);
	if (game.birdFalling === true) {
		game.touchItem1()
	}

})

$('#item2').on('click', function(event) {
	console.log(event.target);
	if (game.platipussFalling === true) {
		game.touchItem2()
	}

})

$('#item3').on('click', function(event) {
	console.log(event.target);
	if (game.pupFalling === true) {
		game.touchItem3()
	}

})

$('#item4').on('click', function(event) {
	console.log(event.target);
	if (game.heartFalling === true) {
		game.touchItem4()
	}

})





//Event listeners
$('#game-container').on('click', (event) => {
	console.log(event.target);
})


$('#ramp1').click(function(){
	game.loseLife()
});

$('#ramp2').click(function(){
	game.loseLife()
});

$('#ramp3').click(function(){
	game.loseLife()
});

$('#ramp4').click(function(){
	game.loseLife()
});


