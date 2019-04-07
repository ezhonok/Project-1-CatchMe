console.log("O.o");


//character movements:
//centered only at the beginning of the round


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

const alice = new Player('')


class Item {
	constructor() {
		const randItem = Math.floor(Math.random() * 4)
		this.item = [$('#item1'), $('#item2'), $('#item3'), $('#item4')][randItem]
	// console.log("This is your random item " + randItem);
	
	}

}

const newItem = new Item('')


const game = {
	//game starts by user pressing enter
	playerOneStats: null, //will be used when player 1 is done
	playerTwoStats: null, //will be used when player 2 is done

	lives: null,
	round: null,
	score: null,
	characterEssence: null,
	itemEssence: null,

	startGame () {
		const alice = new Player
		console.log(alice);
		this.characterEssence = alice
		// this.rollItems()
		const newItem = new Item
		this.itemEssence = newItem
		console.log(newItem);
	},

	moveLeftUp () {
	$(document).keydown(function(keypressed) {
		if (keypressed.keyCode == 87) {
			console.log("leftUp");
	}

});

	},

	rollItems () { 
		$("#item2").animate ({
			"right": "200px",
			// "background-color": "purple"
		}, 2000, () => {
			console.log('done')
		});


	},

	loseLife () {

	},

	scoreUp () {
		if ((randItem === $('#item1')) && moveLeftUp()){
			this.score++
			$('#scoreboard').text("Score: " + this.score)
		}
		if ((randItem === $('#item2')) && moveRightUp()){
			this.score++
		}
		if ((randItem === $('#item3')) && moveLeftDown()){
			this.score++
		}
		if ((randItem === $('#item4')) && moveRightDown()){
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
// game.rollItems()
// game.scoreUp()
game.moveLeftUp()



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









