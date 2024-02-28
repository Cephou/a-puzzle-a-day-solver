//== Class definition
$(document).ready(function() {
	var app = new Vue({
	  el: '#app',
	  data: {
	    tetris: [],
	  },
	  methods: {
	  	initialize: function() {
	  		var grid = [
  				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "",
					"Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "",
					"1",   "2",   "3",   "4",   "5",   "6",   "7",
					"8",   "9",   "10",  "11",  "12",  "13",  "14",
					"15",  "16",  "17",  "18",  "19",  "20",  "21",
					"22",  "23",  "24",  "25",  "26",  "27",  "28",
					"29",  "30",  "31",
	  		];

				var pieces = {
					"yellow": {
						1: {
							{0,0}, {1,0},
							{0,1}, {1,1},
							{0,2}, {1,2},
						},
						2: {
							{0,0}, {1,0}, {2,0},
							{0,1}, {1,1}, {2,1},
						},
					},
					"blue": {
						1: {
							{0,0},
							{0,1}, {1,1},
							{0,2}, {1,2},
						},
						2: {
										  {0,0},
							{-1,1}, {0,1},
							{-1,2}, {0,2},
						},
					},
				};

				var date = ["20", "Fev"];

	  		$.each(grid, function(index, val) {
	  			var position = index + 1;
	  			var x = ((position % 7) == 0) ? 7 : (position % 7);
	  			var y = (Math.trunc((position - 1)/7) + 1);
	  			this.tetris.push({
	  				value: val,
	  				position: position,
						filled: (val==""),
						filled_by: false,
						is_date: false,
	  				x: x,
	  				y: y,
	  		  });
	  		}.bind(this));

	  	},


	  	isValidProposition: function(cell, piece) {
	  	},

			getRandomPiece: function() {

			},

			setPiece: function(cellIndex, piece) {
				// this.tetris[cellIndex].filled = true;

			},

	  	solve: function() {
				$.each(this.tetris, function(index, cell) {
	  			if(!this.tetris[index].filled) {
						$failed = 0;
						while (!pieceSet && hasRemainingPiece && (failed < 100)) {
							var pieceSet = false;
							var piece = getRandomPiece();
							if(isValidProposition(cell, piece)) {
								setPiece(cellIndex, piece);
								pieceSet = true;
							} else {
								failed++;
							}
						}
		  		}
	  		}.bind(this));
	  	},

	  	solveCell: function(cell) {
	  		var cellSolved = false;
	  		$.each(cell.propositions, function(index, proposition) {
	  			var foundCluster = false;
	  			var foundX = false;
	  			var foundY = false;
	  			$.each(this.sudoku, function(notused, sudokuCase) {
		  			if(sudokuCase.propositions.includes(proposition) && sudokuCase.position != cell.position) {
		  				if(sudokuCase.cluster == cell.cluster) {
			  				foundCluster = true;
			  			}
			  			if(sudokuCase.x == cell.x) {
			  				foundX = true;
			  			}
			  			if(sudokuCase.y == cell.y) {
			  				foundY = true;
			  			}
			  			if(foundX && foundY && foundCluster) { // Stop iterating the grid for this proposition, it's dead !
			  				return false;
			  			}
		  			}
	  			}.bind(this));
	  			if(!foundCluster || !foundX || !foundX) { // Unique dans son cluster ou dans la ligne ou dans sa colonne
  					cell.value = proposition;
  					cellSolved = true;
  					return false;
  				}
	  		}.bind(this));
				return cellSolved;
	  	},

	  },
	  mounted: function() {
	    this.initialize();
	    // this.annotate();
	    // this.solve();
	  },
	});
});