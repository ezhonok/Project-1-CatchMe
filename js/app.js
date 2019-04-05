console.log("project 1 ready set go!");


//character movements:
//centered only at the beginning of the round


class Player {
	constructor() {
		this.lives = 0;
		this.score = 0;
		this.round = 1;

	}
	moveLeftUp () {

	}
	moveLeftDown () {

	}
	moveRightUp () {

	}

	moveRightDown () {

	}
}

const alice = new Player('')


class Items {
	constructor() {
		// this.
	}
}


const game = {
	//game starts by user pressing enter
	playerOneStats: null, //will be used when player 1 is done
	playerTwoStats: null, //will be used when player 2 is done

	lives: null,
	round: null,
	score: null,
	characterEssence: null,

	startGame () {
		const alice = new Player
		console.log(alice);
		this.characterEssence = alice
		this.rollItems()
	},

	rollItems () {
		
	},

	loseLife () {

	},

	scoreUp () {

	},

	roundUp () {

	},

	loseGame () {

	},

	winGame () {

	}
}


const fallingItems = {

}


game.startGame();



//Event listeners
$('#game-container').on('click', (event) => {
	console.log(event.target);
})

