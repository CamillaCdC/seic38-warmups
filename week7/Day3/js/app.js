const grains = {
	sum: 0,
	allSquares: [],

	generateOneSquare: function (num) {
		return 2 ** (num - 1);
	},

	generateAllSqures: function () {
		for (let i = 1; i <= 64; i++) {
			this.allSquares.push(this.generateOneSquare(i));
		}
	},

	calculateSum: function () {
		this.sum = this.allSquares.reduce(function (acc, curr) {
			return acc + curr;
		});
	},
};

const generateChessBoard = function () {
	grains.generateAllSqures();
	const board = $('#board');
	grains.allSquares.forEach(function (square) {
		board.append($(`<div>${square}</div>`));
	});
};

$(document).ready(function () {
	// generate all squares
	generateChessBoard();
	
  // calculate sum
	grains.calculateSum();
	$('#totalNumber').text(grains.sum);
	
  // attach listener to input
	$('#oneSquare input').on('input', function (event) {
		const grainVal = parseInt($('#oneSquare input').val());
		$('#oneResult').text(`${grains.generateOneSquare(grainVal)} grain(s)`);
	});
	
  // initial calculation
	$('#oneResult').text(
		`${grains.generateOneSquare(parseInt($('#oneSquare input').val()))} grain(s)`,
	);
});