console.log("createnewbirdcreatenewbirdcreatenewbirdcreatenewbirddddd");
// Completed:
//stop animation for items that are done
//game over logic
//Refactoring code
//fix animation in basket issue
//remove round text from baskets upon start of the game
//Fix: only the initial item that gets clicked appends to basket

//In progress:


//Improve end of round logic
//fix animation for end of round basket


//To be completed:
//create logic for starting the game
//create second set of items
//fix Time is up message (not centered)
//new round - complete logic (new set of characters)


//If time allows:
//add sounds
//second player game
//compare player stats
//create logic for win game
//lose life - needs better logic
//Timer - push stats to the scoreboard


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
	score: 0,
	characterEssence: null,
	itemEssence: null,
	timerId: null,
	roundStarted: false,
	birdFalling: false,
	platipussFalling: false,
	pupFalling: false,
	heartFalling: false,
	roundOver: false,
	


	startGame () {
		const alice = new Player()
		this.characterEssence = alice

		this.startTimer()
		this.rollItems()
		console.log(alice);
		this.round++
		$('#round').text("Round: " + this.round)
		$('#basket1').empty()
	
	},


	startTimer() {
		setInterval(

			() => {	
				console.log("clock " + this.clock);
				this.clock++
				this.rollItems()
				this.stopTimer()
				// $('#timer').text("Round: " + this.clock)
			},

			1000
			)
	},

	stopTimer() {
		if (this.clock === 15) {
			$('#scoreboard').empty()
			$('#scoreboard').append(`Time is up! You saved ${this.score} innocent souls!`).css('font-size', '20px', 'text-align', 'center')
			$('#item1container').remove()
			$('#item2container').remove()
			$('#item3container').remove()
			$('#item4container').remove()
			clearInterval(this.timerId)
			this.roundStarted = false;
			this.resultRound1()
			this.roundOver = true
		}
	},


//what is broken when new item gets created?
//I need it to use the touch function 

	createNewBird () {
		const $newBird = $('<div id="item1">')
		$('#item1container').append($newBird)
		$('#item1').on('click', function(event) {
		if (game.birdFalling === true) {
		game.touchItem1()
			}

		})
	},

	createBirdForBasket () {
		const $newBasketBird = $('<div id="item11">')
		$('#basket1').append($newBasketBird)
	},

	createNewPlatipuss () {
		const $newPlatipuss = $('<div id="item2">')
		$('#item2container').append($newPlatipuss)
		$('#item2').on('click', function(event) {
		if (game.platipussFalling === true) {
		game.touchItem2()
			}

		})

	},

	createPlatipussForBasket () {
		const $newBasketPlatipuss = $('<div id="item22">')
		$('#basket1').append($newBasketPlatipuss)
	},

	createNewPup () {
		const $newPup = $('<div id="item3">')
		$('#item3container').append($newPup)
		$('#item3').on('click', function(event) {
		if (game.pupFalling === true) {
		game.touchItem3()
			}

		})

	},

	createPupForBasket () {
		const $newBasketPup = $('<div id="item33">')
		$('#basket1').append($newBasketPup)
	},

	createNewHeart () { 
		const $newHeart = $('<div id="item4">')
		$('#item4container').append($newHeart)
		$('#item4').on('click', function(event) {
		console.log(event.target);
		if (game.heartFalling === true) {
		game.touchItem4()
			}

		})
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

			// this.createNewBird()
			
	},

	touchItem2 () {
			this.score++
			$('#score').text("Score: " + this.score)
			this.createPlatipussForBasket()
			$('#item2').remove()
			// this.createNewPlatipuss()
	},

	touchItem3 () {
			this.score++
			$('#score').text("Score: " + this.score)
			this.createPupForBasket()
			$('#item3').remove()
			
			// this.createNewPup()
	},
	touchItem4 () {
			this.score++
			$('#score').text("Score: " + this.score)
			this.createHeartForBasket()
			$('#item4').remove()
			
			// this.createNewHeart()
			
	},

	resultRound1 () {
		// console.log("resultround is called");
			// if (this.roundOver === true) {
			$('#basket1').animate ({
				"left": "465px",
			}, 6000, );
			// $('#exit').append($basket1)	
			// }
	},

	releaseDudes () {
			// this.releaseDudes = true;
			$('#item11').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});
			$('#item1').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item22').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item2').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item33').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item3').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item44').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item4').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});
	},


	loseLife () {
			this.lives--
			$('#lives').text("Lives: " + this.lives)
			if (this.lives === 0) { 
			$('#game-container').empty()
			$('#game-container').append("Aw buddy you are out of lives >.<... Wanna try again?").css('font-size', '40px', 'justify-content')
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


	
game.startGame();
// game.stopTimer()
// game.moveLeftUp()
// game.loseGame()





$('#item1').on('click', function(event) {
	console.log(event.target);
	console.log("YOU TOUCHED ME");
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
	game.showLoseLife()
});



$('#basket1').on('click', function(event) {
	console.log("you touched basket1");
	// if (game.releaseDudes === true) {
		game.releaseDudes()
	// }

})




