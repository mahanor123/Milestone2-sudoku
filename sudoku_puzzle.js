// puzzle solver start from here.
function solveSudoku(gameArr) {
    var emptySpot = nextEmtySpot(gameArr);
    var r = emptySpot[0];
    var c = emptySpot[1];



    if (r === -1) {
        return gameArr;
    };

    var possArr = possiblities(r, c, gameArr);
// this loop for store the possiable value in Array.
    for (var k = 0; k < possArr.length && nextEmtySpot(gameArr)[0] !== -1; k++) {
        gameArr[r][c] = possArr[k];
        solveSudoku(gameArr);
    }

    if (nextEmtySpot(gameArr)[0] !== -1) gameArr[r][c] = 0;

    return gameArr;
}
// this loop for columns and rows
function nextEmtySpot(gameArr) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (gameArr[i][j] === 0) return [i, j];
        }
    }
    return [-1, -1];
}

function possiblities(r, c, gameArr) {
    var possArr = [];
    var row = [];
    var col = [];
    var quad = [];
    var k = 0;
    var l = 0;
    if (r <= 2) k = 0; else if (r <= 5) k = 3; else k = 6;
    if (c <= 2) l = 0; else if (c <= 5) l = 3; else l = 6;
// this loop for rows 3*3 grid.
    for (var i = 0; i < 9; i++) {
        row.push(gameArr[i][c]);
    }
// this loop for columns 3*3 grid.    
    for (var j = 0; j < 9; j++) {
        col.push(gameArr[r][j]);
    }
// this loop for columns 3*3 grid.    
    for (var i = k; i < k + 3; i++) {
        for (var j = l; j < l + 3; j++) {
            quad.push(gameArr[i][j]);
        }
    }
// this loop is working for replacing value from puzzle.
    for (var n = 1; n < 10; n++) {
        if (row.indexOf(n) === -1 && col.indexOf(n) === -1 && quad.indexOf(n) === -1) {
            possArr.push(n);
        }
    }
    return possArr;
}

//---------------------------------------------------Test-----------------------------------------------------------------

// this is Array in this Array i am storing the puzzle data. 
var gameArr = [
        [0,0,0,2,6,0,7,0,1],
        [6,8,0,0,7,0,0,9,0],
        [1,9,0,0,0,4,5,0,0],
        [8,2,0,1,0,0,0,4,0],
        [0,0,4,6,0,2,9,0,0],
        [0,5,0,0,0,3,0,2,8],
        [0,0,9,3,0,0,0,7,4],
        [0,4,0,0,5,0,0,3,6],
        [7,0,3,0,1,8,0,0,0],
];

solveSudoku(gameArr);
console.log('Solved');
console.log(gameArr);
