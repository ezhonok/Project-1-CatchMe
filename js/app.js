console.log("O.o");
// Completed:
//stop animation for items that are done
//game over logic

//In progress:
//Refactoring code
//lose life - needs better logic
//

//To be completed:
//stop the timer after 10 seconds
//new round - complete logic
//second player game
//compare player stats
//


//GAME: Help your friends Escape to safety! Round 1 - practice; Round 2 - pets; Round 3 - knowledge
//You got a telegram (lol if you don't know what that is) saying your friends have been 
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
		// this.item = [$('.character-container .item1'), $('.character-container .item2'), $('.character-container .item3'), $('.character-container .item4')][randItem]
	
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
				this.rollItems()
				this.clock++
				console.log("clock " + this.clock);
				// console.log("this is new item" + this.newItem);
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
		const $newBird = $('<div class="item1">')
		$('#left-top-corner-container .character-container').append($newBird)
	},

	createNewPlatipuss () {
		const $newPlatipuss = $('<div class="item2">')
		$('#right-top-corner-container .character-container').append($newPlatipuss)

	},

	createNewPup () {
		const $newPup = $('<div class="item3">')
		$('#left-botom-corner-container .character-container').append($newPup)

	},

	createNewHeart () { 
		const $newHeart = $('<div class="item4">')
		$('#right-bottom-corner-container .character-container').append($newHeart)

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

	animateItem1 () { console.log("1")
		if (this.clock % 2 === 0) {
			this.birdFalling = true
			$('.character-container .item1').animate ({
			"left": "200px",
			}, 3000, () => {
				console.log('done item1')
			
				this.birdFalling = false
				// move old bird to correct basket
				$('.character-container .item1').remove()

				this.createNewBird();

			});
		}
	},

	animateItem2 () { console.log("2")
		if (this.clock % 2 === 0) {
			this.platipussFalling = true
			$('.character-container .item2').animate ({
				"right": "200px",
			}, 3000, () => {
				platipussFalling = false
				$('.character-container .item2').remove()
				this.createNewPlatipuss()
			});
		}
	},

	animateItem3 () { console.log("3")
		if (this.clock % 2 === 0){
			this.pupFalling = true
			$('.character-container .item3').animate ({
				"left": "200px",
			}, 3000, () => {
				this.pupFalling = false
				$('.character-container .item3').remove()
				this.createNewPup()

			});
		}
	},

	animateItem4 () { console.log("4")
		if (this.clock % 2 === 0) {
			this.heartFalling = true
			$('.character-container .item4').animate ({
				"right": "200px",
			}, 3000, () => {
				this.heartFalling = false
				$('.character-container .item4').remove()

				console.log('done item4')
				this.createNewHeart()
			});
		}
	},

	touchItem1 () { 
			this.score++
			// console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('.character-container .item1').stop()
			console.log('append')
			$('#basket1').append($('.character-container .item1'))
			this.createNewBird()
			// $('#item1').append($)
			
	},

	touchItem2 () {
			this.score++
			console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('#basket1').append($('.character-container .item2'))
			$('.character-container .item2').stop()
			this.createNewPlatipuss()
	},

	touchItem3 () {
			this.score++
			console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('#basket1').append($('.character-container .item3'))
			$('.character-container .item3').stop()
			this.createNewPup()
	},
	touchItem4 () {
			this.score++
			console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('#basket1').append($('.character-container .item4'))
			$('.character-container .item4').stop()
			this.createNewHeart()
			
	},

	loseLife () {
			this.lives--
			$('#lives').text("Lives: " + this.lives)
			console.log("Lives left " + this.lives);
			if (this.lives === 0) { 
			console.log("game over");
			console.log(this.lives);
			$('#basket-container').empty()
			$('#basket-container').text("Aw buddy you let them down... Wanna try again?")
		}
	},


	nextRound () {

	},

	loseGame () {
		// if (this.lives === 0) { //something is wrong with #lives
		// 	console.log("game over");
		// 	console.log(this.lives);
		// $('#game-container').remove()
		// }
	},

	winGame () {

	}
}


	
game.startGame();
// game.stopTimer()
// game.moveLeftUp()
// game.scoreUp()
// game.rollItems()
// game.startTimer()
// game.makeItems()
// game.loseGame()
// game.createNewBird()




$('.item1').on('click', function(event) {
	console.log(event.target);
	if (game.birdFalling === true) {
		game.touchItem1()
	}

})

$('.item1').on('click', function(event) {
	console.log(event.target);
	if (game.platipussFalling === true) {
		game.touchItem2()
	}

})

$('.item1').on('click', function(event) {
	console.log(event.target);
	if (game.Falling === true) {
		game.touchItem3()
	}

})

$('.item1').on('click', function(event) {
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


