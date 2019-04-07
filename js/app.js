console.log("O.o");


//working on logic for score going up

class Player {
	constructor() {
		this.lives = 0;
		this.score = 0;
		this.round = 1;

	}

	moveLeftDown () {
65
	}
	moveRightUp () {
80
	}

	moveRightDown () {
76
	}
}

// const alice = new Player('')


class Item {
	constructor() {
		const randItem = Math.floor(Math.random() * 4)
		this.item = [$('#item1'), $('#item2'), $('#item3'), $('#item4')][randItem]

	// console.log(this.item);
	
	}

}



const game = {
	playerOneStats: null, //will be used when player 1 is done
	playerTwoStats: null, //will be used when player 2 is done

	clock: null,
	lives: null,
	round: null,
	score: null,
	characterEssence: null,
	itemEssence: null,

	startGame () {
		const alice = new Player
		this.characterEssence = alice

		// this.startTimer()
		this.rollItems()
		console.log(alice);
		// console.log(newItem);
		// this.newItem.animate ({
		// 	"right": "200px",
		// }, 2000, () => {
		// 	console.log('done')
		// });

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
				console.log("this is new item" + this.newItem);
			},

			1000
			)
	},

	rollItems () {
		const newItem = new Item
		this.itemEssence = newItem
		console.log(this.itemEssence);
		if (this.itemEssence.id === "item1") {
			console.log("Item 1 is up");
			this.animateItem1()
		}
		if (this.itemEssence == $('#item2')) {
			this.animateItem2()
			console.log("Item 2 is up");

		}
		if (this.itemEssence == $('#item3')) {
			this.animateItem3()
			console.log("Item 3 is up");

		}
		if (this.itemEssence == $('#item4')) {
			this.animateItem4()
		}
	},

	animateItem1 () {
			$('#item1').animate ({
			"right": "200px",
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
			"right": "200px",
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

	loseLife () {

	},

	scoreUp () {
		if (moveLeftUp()){
			this.score++
			$('#scoreboard').text("Score: " + this.score)
			console.log(this.score);
		}
		if ((newItem === $('#item2')) && moveRightUp()){
			this.score++
		}
		if ((newItem === $('#item3')) && moveLeftDown()){
			this.score++
		}
		if ((newItem === $('#item4')) && moveRightDown()){
			this.score++
		}
	},

	roundUp () {

	},

	loseGame () {

	},

	winGame () {

	}
}


	
game.startGame();
// game.moveLeftUp()
// game.scoreUp()
game.rollItems()
// game.startTimer()

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

$(document).keydown(function(keypressed) {
	if (keypressed.keyCode == 65) {
		$("#character").css("background-color", "lightsteelblue")
	}
});

$(document).keydown(function(keypressed) {
	if (keypressed.keyCode == 80) {
		$("#character").css("background-color", "yellow")
	}
});


$(document).keydown(function(keypressed) {
	if (keypressed.keyCode == 76) {
		$("#character").css("background-color", "green")
	}
});









