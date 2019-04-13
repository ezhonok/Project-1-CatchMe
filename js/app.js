console.log("createnewbirdcreatenewbirdcreatenewbirdcreatenewbirddddd");
// Completed:
//stop animation for items that are done
//game over logic
//Refactoring code
//fix animation in basket issue
//remove round text from baskets upon start of the game
//Fix: only the initial item that gets clicked appends to basket
//fix animation for end of round basket
//Improve end of round logic
//push player1 stats in the storage
//new round - complete logic (new set of characters - stretch)
//compare player stats
//create logic for win game
//create logic for starting the game
//create second set of items
//second player game
//fix touch function not working for second player
//better logic for win game (rn - winner announced on click scoreboard/ player doesnt know to do so)
//Better start of the game logic
//Instructions


//In progress:
//clean up code
//add comments to code for easier read


//To be completed:

//fix readme and user story

//fix items 11 22 33 44 not working on releaseDudes()
//Timer - push stats to the scoreboard
//push player 2 stats to the scoreboard
//div next to the door letting user know to click on animals to release them



//If time allows:
//fix overlap of divs during basket animation
//have the door appear when player is done instead of right away
//third round
//add sounds
//lose life - needs better logic
//fix Time is up message (not centered)
//fix all dynamic messages for that matter - none are centered, cant figure out why css()isnt working for this



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
		this.timerId = setInterval(

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
			// $('#item1container').remove()
			// $('#item2container').remove()
			// $('#item3container').remove()
			// $('#item4container').remove()
			clearInterval(this.timerId)
			this.roundStarted = false;
			this.resultRound1()
			this.roundOver = true
			this.loseRound()
		}
	},


//createNew<..> code below is used to create new items
//that roll down the ramp
	createNewBird () { 
		const $newBird = $('<div id="item1">')
		$('#item1container').append($newBird)

		$('#item1').on('click', function(event) {
		if (game.birdFalling === true) {
		game.touchItem1()
			}
		})
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

	createNewPup () {
		const $newPup = $('<div id="item3">')
		$('#item3container').append($newPup)
		$('#item3').on('click', function(event) {
		if (game.pupFalling === true) {
		game.touchItem3()
			}
		})
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

//create<...>ForBasket code is used to create
//an illusion that the items that user clicks 
//go directly in the basket(by basket I mean one of the three divs in the middle
//of the game container). This was created because I couldnt find
//another way to stop the animation when items were inside the basket
//this way the items that are appended are always static until released

	createPlatipussForBasket () {
		const $newBasketPlatipuss = $('<div id="item22">')
		$('#basket1').append($newBasketPlatipuss)
	},

	createBirdForBasket () {
		const $newBasketBird = $('<div id="item11">')
		$('#basket1').append($newBasketBird)
	},

	createPupForBasket () {
		const $newBasketPup = $('<div id="item33">')
		$('#basket1').append($newBasketPup)
	},


	createHeartForBasket () {
		const $newBasketHeart = $('<div id="item44">')
		$('#basket1').append($newBasketHeart)
	},

//rollItems function is used to randomly
//assign animation 
	rollItems () {

		const randItem = Math.floor((Math.random() * 4) + 1)
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


//animateItem is used to actually animate corresponding items
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

//touchItem<..> is used to increase score
//and append corresponding items to teh basket (div in the middle of
//the game container)
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

//resultRound is used to move the basket with
//"caught" items towards the door
	resultRound1 () {
		// console.log("resultround is called");
			// if (this.roundOver === true) {
			$('#basket1').animate ({
				"left": "465px",
			}, 6000, );
		
	},

//releaseDudes..well is used to release the dudes duh
//off they go back to their cosy couches and fresh food
	releaseDudes () {
			// this.releaseDudes = true;
			$('#item1').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item11').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');

			});

			
			$('#item2').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item22').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item3').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item33').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item4').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

			$('#item44').animate ({
				"left": "300px",
			}, 3000, () => { console.log('done');
				
			});

		
	},

//loseRound is a function that announces that player lost
//if time is up and player hasn't rescued any of his friends
//I am also crearting dynamic basket-container div heer to center
// the text as it couldn't be centered with just .css() method
//for some reason 
	loseRound () {
		if ((this.roundOver === true) && (this.score === 0)){
			$('#game-container').empty()
			const $newBasketContainer = $('<div id="basket-container">')
			$('#game-container').append($newBasketContainer)
			$('#basket-container').append("Wow... These are your friends we are talking about! Doesn't seem like you even tried...You'd better try again and rescue them this time!").css('font-size', '30px');
		}
	},

//loseLife function decreases lives if player clicks on a ramp
//instead of the item(character)
	loseLife () {
			this.lives--
			$('#lives').text("Lives: " + this.lives)
			if (this.lives === 0) { 
			$('#game-container').empty()
			$('#game-container').append("Aw buddy you are out of lives >.<... Wanna try again?").css('font-size', '40px', 'justify-content')
		}
		
	},

}
	
//Below code is pretty much the same as above
//with a few tweaks in the items names to ensure
//animation and jquery work properly
const game2 = {
	clock: null,
	lives: 3,
	round: 2,
	score: 0,
	characterEssence: null,
	itemEssence: null,
	timerId: null,
	roundStarted: false,
	birdFalling: false,
	platipussFalling: false,
	pupFalling: false,
	heartFalling: false,


	startNextRound () {
		$('#basket1').remove()
		this.startRound2()
		
	},

	startRound2 () {
		const cat = new Player()
		this.characterEssence = cat

		this.startTimer()
		this.rollItems()
		console.log(cat);
		this.round++
		$('#round').text("Round: " + this.round)
		$('#basket2').empty()
		$('#scoreboard').empty()
		$('#score').text("Score: " + this.score)
		$('#lives').text("Score: " + this.score)
		$('#round').text("Score: " + this.score)
		// this.createNewBird()
	},

	startTimer() {
		this.timerId = setInterval(

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

	createNewBird () {
		const $newBird = $('<div id="item1">')
		$('#item1container').append($newBird)
		$('#item1').on('click', function(event) {
		if (game.birdFalling === true) {
		game2.touchItem1()

		}

		})
	},

	createBirdForBasket () {
		const $newBasketBird = $('<div id="item11">')
		$('#basket2').append($newBasketBird)
	},

	createNewPlatipuss () {
		const $newPlatipuss = $('<div id="item2">')
		$('#item2container').append($newPlatipuss)
		$('#item2').on('click', function(event) {
		if (game2.platipussFalling === true) {
		game2.touchItem2()
			}

		})

	},

	createPlatipussForBasket () {
		const $newBasketPlatipuss = $('<div id="item22">')
		$('#basket2').append($newBasketPlatipuss)
	},

	createNewPup () {
		const $newPup = $('<div id="item3">')
		$('#item3container').append($newPup)
		$('#item3').on('click', function(event) {
		if (game2.pupFalling === true) {
		game2.touchItem3()
			}

		})

	},

	createPupForBasket () {
		const $newBasketPup = $('<div id="item33">')
		$('#basket2').append($newBasketPup)
	},

	createNewHeart () { 
		const $newHeart = $('<div id="item4">')
		$('#item4container').append($newHeart)
		$('#item4').on('click', function(event) {
		console.log(event.target);
		if (game2.heartFalling === true) {
		game2.touchItem4()
			}

		})
	},

	createHeartForBasket () {
		const $newBasketHeart = $('<div id="item44">')
		$('#basket2').append($newBasketHeart)
	},



	rollItems () {
		const randItem = Math.floor((Math.random() * 4) + 1)
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
			$('#item1').remove()
			this.createBirdForBasket()

			// this.createNewBird()
			
	},

	touchItem2 () {
			this.score++
			$('#score').text("Score: " + this.score)
			$('#item2').remove()
			this.createPlatipussForBasket()
			// this.createNewPlatipuss()
	},

	touchItem3 () {
			this.score++
			$('#score').text("Score: " + this.score)
			$('#item3').remove()
			this.createPupForBasket()
			
			// this.createNewPup()
	},
	touchItem4 () {
			this.score++
			$('#score').text("Score: " + this.score)
			$('#item4').remove()
			this.createHeartForBasket()
			
			// this.createNewHeart()
			
	},

		stopTimer() {
		if (this.clock === 17) {
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
			this.loseRound()
		}
	},

		loseRound () {
		if ((this.roundOver === true) && (this.score === 0)){
			$('#game-container').empty()
			const $newBasketContainer = $('<div id="basket-container">')
			$('#game-container').append($newBasketContainer)
			$('#basket-container')
			$('#basket-container').append("Wow... These are your friends we are talking about! Doesn't seem like you even tried...You'd better try again and rescue them this time!").css('font-size', '30px');
		}
	},

	loseLife () {
			this.lives--
			$('#lives').text("Lives: " + this.lives)
			if (this.lives === 0) { 
			$('#game-container').empty()
			$('#game-container').append("Aw buddy you are out of lives >.<... Wanna try again?").css('font-size', '40px', 'justify-content')
		}
		
	},

		resultRound1 () {
			$('#basket2').animate ({
				"left": "465px",
			}, 6000, );
			
	},

	releaseDudes () {
		$('#basket3').text(`CLICK HERE TO SEE WHO WON`).css('color', 'white')

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

	compareStats () {

		if (game.score < game2.score) {
			$('#basket-container').append(`Player 2 wins! Well done, buddy! Take your friends home`)
		}
		if (game.score > game2.score) {
			$('#basket-container').append(`Player 1 wins! Well done, buddy! Take your friends home`)
		}
	}

}




//Listeners

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



$('#item11').on('click', function(event) {
	console.log(event.target);
	console.log("YOU TOUCHED ME");
	if (game.birdFalling === true) {
		game.touchItem1()
	}

})

$('#item22').on('click', function(event) {
	console.log(event.target);
	if (game.platipussFalling === true) {
		game.touchItem2()
	}

})

$('#item33').on('click', function(event) {
	console.log(event.target);
	if (game.pupFalling === true) {
		game.touchItem3()
	}

})

$('#item44').on('click', function(event) {
	console.log(event.target);
	if (game.heartFalling === true) {
		game.touchItem4()
	}

})





$('#item1').on('click', function(event) {
	console.log(event.target);
	if (game2.birdFalling === true) {
		game2.touchItem1()
	}

})

$('#item2').on('click', function(event) {
	console.log(event.target);
	if (game2.platipussFalling === true) {
		game2.touchItem2()
	}

})

$('#item3').on('click', function(event) {
	console.log(event.target);
	if (game2.pupFalling === true) {
		game2.touchItem3()
	}

})

$('#item4').on('click', function(event) {
	console.log(event.target);
	if (game2.heartFalling === true) {
		game2.touchItem4()
	}

})


$('#item11').on('click', function(event) {
	console.log(event.target);
	if (game2.birdFalling === true) {
		game2.touchItem1()
	}

})

$('#item22').on('click', function(event) {
	console.log(event.target);
	if (game2.platipussFalling === true) {
		game2.touchItem2()
	}

})

$('#item33').on('click', function(event) {
	console.log(event.target);
	if (game2.pupFalling === true) {
		game2.touchItem3()
	}

})

$('#item44').on('click', function(event) {
	console.log(event.target);
	if (game2.heartFalling === true) {
		game2.touchItem4()
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
		game.releaseDudes()
	// }

})


$('#door').on('click', function(event) {
	console.log("closing the door");
		game2.startNextRound()
})



$('#basket2').on('click', function(event) {
	console.log("you touched basket2");
		game2.releaseDudes()


})

//Beginning of the game listeners

//displays game insructions when div "#here" is clicked
$('#here').on('click', function(event) {
	$('#curtain').remove()
	$('#hide-instructions').css('display', 'block')
})


$('#heart').on('click', function(event) {
	$('#instructions-container').remove()
	$('#hide-game').css('display', 'block')
	game.startGame()
})

$('#basket3').on('click', function(event) {
	$('#scoreboard').empty()
	game2.compareStats()

})



