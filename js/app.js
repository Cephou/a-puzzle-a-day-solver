//== Class definition
$(document).ready(function() {
	var app = new Vue({
	  el: '#app',
	  data: {
	    tetris: [],
			alreadyUsedPieces: [], // to reset when date is found or program stops
			hasRemainingPiece: true,
			pieces: {},
			validDate: false,
			dateInput: '', // Initializing data property for input value
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

				this.pieces = {
					"amber": {
						1: [
							[0,0], [1,0],
							[0,1], [1,1],
							[0,2], [1,2],
						],
						2: [
							[0,0], [1,0], [2,0],
							[0,1], [1,1], [2,1],
						],
					},
					"light-blue-lighten-2": {
						1: [
							[0,0],
							[0,1], [1,1],
							[0,2], [1,2],
						],
						2: [
										  [0,0],
							[-1,1], [0,1],
							[-1,2], [0,2],
						],
						3: [
							[0,0], [1,0],
							[0,1], [1,1],
							[0,2],
						],
						4: [
							[0,0], [1,0],
							[0,1], [1,1],
										 [1,2],
						],
						5: [
							[0,0], [1,0],
							[0,1], [1,1], [2,1],
						],
						6: [
										  [0,0], [1,0],
							[-1,1], [0,1], [1,1],
						],
						7: [
							[0,0], [1,0], [2,0],
							[0,1], [1,1],
						],
						8: [
							[0,0], [1,0], [2,0],
										 [1,1], [2,1],
						],
					},
					"red": {
						1: [
							[0,0],				[2,0],
							[0,1], [1,1], [2,1],
						],
						2: [
							[0,0], [1,0],	[2,0],
							[0,1], 				[2,1],
						],
						3: [
							[0,0], [1,0],
							[0,1],
							[0,2], [1,2],
						],
						4: [
							[0,0], [1,0],
										 [1,1],
							[0,2], [1,2],
						],
					},
					"purple": {
						1: [
							[0,0],
							[0,1],
							[0,2], [1,2], [2,2],
						],
						2: [
															[0,0],
															[0,1],
							[-2,2], [-1,2], [0,2],
						],
						3: [
							[0,0], [1,0], [2,0],
														[2,1],
														[2,2],
						],
						4: [
							[0,0], [1,0], [2,0],
							[0,1],
							[0,2],
						],
					},
					"green": {
						1: [
							[0,0],
							[0,1],
							[0,2],
							[0,3], [1,3],
						],
						2: [
											[0,0],
											[0,1],
											[0,2],
							[-1,3], [0,3],
						],
						3: [
							[0,0], [1,0],
							[0,1],
							[0,2],
							[0,3],
						],
						4: [
							[-1,0], [0,0],
											[0,1],
											[0,2],
											[0,3],
						],
						5: [
							[0,0], [1,0], [2,0], [3,0],
																	 [3,1],
						],
						6: [
							[0,0], [1,0], [2,0], [3,0],
							[0,1],
						],
						7: [
							[0,0],
							[0,1], [1,1], [2,1], [3,1],
						],
						8: [
																	 [3,-1],
							[0,0], [1,0], [2,0], [3, 0],
						],
					},
					"yellow": {
						1: [
							[0,0],
							[0,1],
							[0,2], [1,2],
							[0,3],
						],
						2: [
							[0,0],
							[0,1], [1,1],
							[0,2],
							[0,3],
						],
						3: [
											[0,0],
											[0,1],
							[-1,2],	[0,2],
											[0,3],
						],
						4: [
											[0,0],
							[-1,1],	[0,1],
											[0,2],
											[0,3],
						],
						5: [
							[0,0], [1,0], [2,0], [3,0],
														[2,1],
						],
						6: [
							[0,0], [1,0], [2,0], [3,0],
										 [1,1],
						],
						7: [
														[2,-1],
							[0,0], [1,0], [2,0 ], [3,0],
						],
						8: [
										 [1,-1],
							[0,0], [1,0 ], [2,0], [3,0],
						],
					},
					"blue": {
						1: [
							[0,0],
							[0,1], [1,1],
										 [1,2],
										 [1,3],
						],
						2: [
										 	[0,0],
							[-1,1], [0,1],
							[-1,2],
							[-1,3],
						],
						3: [
							[0,0],
							[0,1],
							[0,2], [1,2],
										 [1,3],
						],
						4: [
											[0,0],
										 	[0,1],
							[-1,2], [0,2],
							[-1,3],
						],
						5: [
							[0,0], [1,0],
										 [1,1], [2,1], [3,1],
						],
						6: [
							[0,0], [1,0], [2,0],
										 				[2,1], [3,1],
						],
						7: [
										 [1,-1], [2,-1], [3,-1],
							[0,0], [1,0],
						],
						8: [
										 				[2,-1], [3,-1],
							[0,0], [1,0], [2,0],
						],
					},
					"pink": {
						1: [
							[0,0],
							[0,1], [1,1], [2,1],
														[2,2],
						],
						2: [
														[2,-1],
							[0,0], [1,0], [2,0 ],
							[0,1],
						],
						3: [
										  [0,0], [1,0],
										  [0,1],
							[-1,2], [0,2],
						],
						4: [
							[0,0], [1,0],
										 [1,1],
										 [1,2], [2,2],
						],
					},
				};

				this.validDate = false;

				this.hasRemainingPiece = true;

				this.alreadyUsedPieces = [];

				this.tetris = [];

	  		$.each(grid, function(index, val) {
	  			var position = index + 1;
	  			var x = ((position % 7) == 0) ? 7 : (position % 7);
	  			var y = (Math.trunc((position - 1)/7) + 1);
	  			this.tetris.push({
	  				value: val,
	  				position: position,
						filled: (val==""),
						filled_by: false, // [yellow, 1]
						is_date: false,
	  				x: x,
	  				y: y,
	  		  });
	  		}.bind(this));

	  	},

	  	isValidProposition: function(cell, piece) {
				for (let i = 0; i < piece.matrix.length; i++) {
					var matrix = piece.matrix[i];
					var coord = [(cell.x + matrix[0]), (cell.y + matrix[1])];
					var pieceCell = this.tetris.find(obj => obj.x === coord[0] && obj.y === coord[1] && obj.filled === false);
					if(typeof pieceCell == "undefined") {
						return false;
					}
				}
				return true;
	  	},

			getRandomPiece: function() {
				var freePieces = [];
				$.each(this.pieces, function(color, piecesConfiguration) {
					if(!this.alreadyUsedPieces.includes(color)) {
						freePieces.push(color);
					}
				}.bind(this));
				var randomIndexColor = Math.floor(Math.random() * freePieces.length);
				var randomColor = freePieces[randomIndexColor];

				var pieceOrientationsIndexes = Object.keys(this.pieces[randomColor]);
				var randomIndexOrientation = Math.floor(Math.random() * pieceOrientationsIndexes.length);
				var randomOrientation = pieceOrientationsIndexes[randomIndexOrientation];

				return {"color": randomColor, "orientation": randomOrientation, "matrix": this.pieces[randomColor][randomOrientation], };
			},

			setPiece: function(cell, piece) {
				// console.log("setPiece");
				for (let i = 0; i < piece.matrix.length; i++) {
					var matrix = piece.matrix[i];
					var coord = [(cell.x + matrix[0]), (cell.y + matrix[1])];
					var cellIndex = this.tetris.findIndex(obj => obj.x === coord[0] && obj.y === coord[1] && obj.filled === false);
					this.tetris[cellIndex]["filled"] = true;
					this.tetris[cellIndex]["filled_by"] = [piece.color, piece.orientation];
				};

				// Add color to alreadyUsedPieces
				this.alreadyUsedPieces.push(piece.color);

				// Update hasRemainingPiece
				if(this.alreadyUsedPieces.length == Object.keys(this.pieces).length) this.hasRemainingPiece = false;
			},

			setValidDate: function() {
				const dateCells = this.tetris.filter(cell => cell.filled === false && cell.value !== "");
				if(
					(isNaN(dateCells[0].value) && !isNaN(dateCells[1].value))
					||
					(isNaN(dateCells[1].value) && !isNaN(dateCells[0].value))
				) {
					this.validDate = true;
					this.writeJSONToFile();
				} else {
					this.validDate = false;
				}
			},

			writeJSONToFile: function() {
				var date = "";
				$.each(this.tetris, function(index, cell) {
					if(!this.tetris[index].filled) {
						date += this.tetris[index].value;
					}
				}.bind(this));
				const jsonData = JSON.stringify(this.tetris);
				$.ajax({
					type: 'POST',
					url: 'save_data.php',
					data: { json: jsonData, date: date, },
					success: function(response) {
						console.log('Data saved successfully.');
						window.location.reload();
					},
					error: function(xhr, status, error) {
						console.error('Error saving data:', error);
					}
				});
			},

	  	solve: function() {
				superFailed = 0;
				while (this.hasRemainingPiece && (superFailed < 10)) {
					$.each(this.tetris, function(index, cell) {
						if(!this.tetris[index].filled) {
							failed = 0;
							while (!pieceSet && this.hasRemainingPiece && (failed < 10)) {
								var pieceSet = false;
								var piece = this.getRandomPiece();
								if(this.isValidProposition(cell, piece)) {
									this.setPiece(cell, piece);
									pieceSet = true;
								} else {
									failed++;
									// console.log("Failed" + failed);
								}
							}
						}
					}.bind(this));
					superFailed++;
					// console.log(superFailed);
				}
				if(!this.hasRemainingPiece) this.setValidDate();
	  	},

			loadDate: function(_dateInput) {
				var _this = this; // Storing reference to Vue instance
				$.ajax({
					type: 'POST',
					url: 'get_data.php',
					data: { date: _dateInput, },
					success: function(response) {
						if(response != "ko") {
							let decoded_res = JSON.parse(JSON.parse(response));
							_this.tetris = decoded_res;
						}
					},
					error: function(xhr, status, error) {
						console.error('Error saving data:', error);
					}
				});
			},

	  },
	  mounted: function() {
			while (this.hasRemainingPiece || !this.validDate) {
				this.initialize();
				this.solve();
			}
	  },
	});
});