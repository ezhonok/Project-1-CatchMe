console.log("O.o");


//In progress:
//stop animation for items that are done
//game over logic

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
		// this.img = [('https://payload.cargocollective.com/1/2/71834/11021397/ATI_bird_animations_all.gif'), ('https://data.whicdn.com/images/81086916/original.gif'), ('https://colossalmedia.com/wp-content/uploads/2018/02/Heartgif.gif'), ('https://i.imgur.com/nk7l6Zi.gif')][randItem]
	}
	// createDiv () {
	// 	const div = $('<div/>').addId(this.item).css({
	// 		// 'background-img': this.img
	// 	})
	// 	return div
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
	roundStarted: false,
	currentItems: [],

	makeItems() {
		console.log("makeItems called");
		if(this.roundStarted === false) {
			for (let i = 0; i < 4; i++) {
				const t = new Item(i);
				this.currentItems.push(t)
				$('')
			}
		}
	},

	startGame () {
		const alice = new Player()
		this.characterEssence = alice

		this.startTimer()
		this.rollItems()
		console.log(alice);

	},


	moveLeftUp () {
	$(document).keydown(function(keypressed) {
		if (keypressed.keyCode == 87) {
			console.log("leftUp");
	}

});

	},

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
	},

	stopTimer() {
		if (this.clock === 10) {

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
			$('#item1').animate ({
			"left": "200px",
		}, 2000, () => {
			console.log('done item1')


		});
	},

	animateItem2 () {
			$('#item2').animate ({
			"right": "200px",
		}, 2000, () => {
			console.log('done item2')
		});
	},

	animateItem3 () {
			$('#item3').animate ({
			"left": "200px",
		}, 2000, () => {
			console.log('done item3')
		});
	},

	animateItem4 () {
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
			
	},

	touchItem2 () {
			this.score+++
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
			this.score+++
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


	
// game.startGame();
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

$('#item1container').click(function(){
	game.loseLife()
});

$('#item2container').click(function(){
	game.loseLife()
});

$('#item3container').click(function(){
	game.loseLife()
});

$('#item4container').click(function(){
	game.loseLife()
});

$('#item5container').click(function(){
	game.loseLife()
});

