console.log("O.o");
// Completed:
//stop animation for items that are done
//game over logic

//In progress:
//Creating dynamic divs using class Item
//lose life - needs better logic
//

//To be completed
//stop the timer after 10 seconds
//new round
//second player game
//compare player stats
//

class Player {
	constructor() {
		this.lives = 0;
		this.score = 0;
		this.round = 1;

	}

}



class Item {
	constructor() {
		const randItem = Math.floor(Math.random() * 4)
		this.item = [$('#item1'), $('#item2'), $('#item3'), $('#item4')][randItem]
	}
	// createDiv1 () {
	// 	const div1 = $('<div/>').addClass('item1')
	// 	console.log("your div is " + div1);
	// 	return div1
	// }
	// createDiv2 () {
	// 	const div2 = $('<div/>').addClass('item2')
	// 	console.log("your div is " + div2);
	// 	return div2

	// }
	// createDiv3 () {
	// 	const div3 = $('<div/>').addClass('item3')
	// 	console.log("your div is " + div3);
	// 	return div3
	// }
	// createDiv2 () {
	// 	const div4 = $('<div/>').addClass('item4')
	// 	console.log("your div is " + div4);
	// 	return div4
	// }

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
	// currentItems: [],

	// makeItems() {
	// 	console.log("makeItems called");
	// 	if(this.roundStarted === false) {
	// 		for (let i = 0; i < 4; i++) {
	// 			const t = new Item(i);
	// 			this.currentItems.push(t)
	// 			$('')
	// 		}
	// 	}
	// },

	startGame () {
		const alice = new Player()
		this.characterEssence = alice

		this.startTimer()
		this.rollItems()
		console.log(alice);
		this.round++
		$('#round').text("Round: " + this.round)
	

	},


// 	moveLeftUp () {
// 	$(document).keydown(function(keypressed) {
// 		if (keypressed.keyCode == 87) {
// 			console.log("leftUp");
// 	}

// });

	// },

	startTimer() {
		setInterval(

			() => {
				this.rollItems()
				this.clock++
				console.log("clock " + this.clock);
				// console.log("this is new item" + this.newItem);
			},

			1000
			)
		this.stopTimer()
	},

	stopTimer() {
		if (this.clock === 10) {
			$('#scoreboard').append(`Time is up!`)
			clearInterval(this.timerId)
			this.roundStarted = false;
		}
	},

	rollItems () {
		const newItem = new Item()
		this.itemEssence = newItem

		if (this.itemEssence.item.attr('id') === "item1") {
			this.animateItem1()
		}
		if (this.itemEssence.item.attr('id') === "item2") {
			this.animateItem2()

		}
		if (this.itemEssence.item.attr('id') === "item3") {
			this.animateItem3()

		}
		if (this.itemEssence.item.attr('id') === "item4") {
			this.animateItem4()
		}
	},

	animateItem1 () {
		if (this.clock % 3 === 0)
			$('#item1').animate ({
			"left": "200px",
		}, 2000, () => {
			console.log('done item1')
			$('#item1container').append($('#item1'))

		});
	},

	animateItem2 () {
		if (this.clock % 2 === 0)
			$('#item2').animate ({
			"right": "200px",
		}, 2000, () => {
			// console.log('done item2')
		});
	},

	animateItem3 () {
		if (this.clock % 4 === 0)
			$('#item3').animate ({
			"left": "200px",
		}, 2000, () => {
			// console.log('done item3')
		});
	},

	animateItem4 () {
		if (this.clock % 5 === 0)
			$('#item4').animate ({
			"right": "200px",
		}, 2000, () => {
			console.log('done item4')
		});
	},

	touchItem1 () {
			this.score++
			console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('#basket1').append($('#item1'))
			$('#item1').stop()
			// $('#item1').append($)
			
	},

	touchItem2 () {
			this.score++
			console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('#basket1').append($('#item2'))
			$('#item2').stop()
	},

	touchItem3 () {
			this.score++
			console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('#basket1').append($('#item3'))
			$('#item3').stop()
	},
	touchItem4 () {
			this.score++
			console.log(this.score);
			$('#score').text("Score: " + this.score)
			$('#basket1').append($('#item4'))
			$('#item4').stop()
			
	},

	loseLife () {
			this.lives--
			$('#lives').text("Lives: " + this.lives)
			console.log("Lives left " + this.lives);
			if (this.lives === 0) { //something is wrong with #lives
			console.log("game over");
			console.log(this.lives);
		$('#basket-container').empty()
		$('#basket-container').text("Sorry, you are out of lives. But do try again! ")
		}
	},


	roundUp () {

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
game.stopTimer()
// game.moveLeftUp()
// game.scoreUp()
// game.rollItems()
// game.startTimer()
// game.makeItems()
game.loseGame()

// console.log(game.itemNumber);

//Event listeners
$('#game-container').on('click', (event) => {
	console.log(event.target);
})



// $(document).keydown(function(keypressed) {
// 	if (keypressed.keyCode == 87) {
// 		$("#character").css("background-color", "tomato")
// 	}
// });

// $(document).keydown(function(keypressed) {
// 	if (keypressed.keyCode == 65) {
// 		$("#character").css("background-color", "lightsteelblue")
// 	}
// });

// $(document).keydown(function(keypressed) {
// 	if (keypressed.keyCode == 80) {
// 		$("#character").css("background-color", "yellow")
// 	}
// });


// $(document).keydown(function(keypressed) {
// 	if (keypressed.keyCode == 76) {
// 		$("#character").css("background-color", "green")
// 	}
// });


$('#item1').click(function(){
	game.touchItem1()
});

$('#item2').click(function(){
	game.touchItem2()
});

$('#item3').click(function(){
	game.touchItem3()
});

$('#item4').click(function(){
	game.touchItem4()
});

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


