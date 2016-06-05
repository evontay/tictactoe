console.log("App is now started");



// ===== TIC TAC TOE LOGIC ======
var player = 1;

var grid = [
    null, null, null,
    null, null, null,
    null, null, null,
    ];

function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false;
  } else {
    grid[index] = player;
    if (player === 1) player = 2;
    else player = 1;
    return true;
  }
}

var restart = function() {
    grid = [
    null, null, null,
    null, null, null,
    null, null, null,
    ];
    player = 1;
};

var isGameOver = function() {
    if (whoWon() === 1) {
        console.log("player1 wins!");
        return true;}
    else if (whoWon() === 2) {
        console.log("player2 wins!");
        return true;}
    else if (whoWon() === 3) {
        console.log("It's a draw!");
        return true;}
    return false;
};

var whoWon = function () {
    //ROW 1: [0, 1, 2]
    if (grid[0] === 1 && grid[1] === 1 && grid[2] === 1) {return 1;}
    if (grid[0] === 2 && grid[1] === 2 && grid[2] === 2) {return 2;}
    //ROW 2:  [3, 4, 5]
    if (grid[3] === 1 && grid[4] === 1 && grid[5] === 1) {return 1;}
    if (grid[3] === 2 && grid[4] === 2 && grid[5] === 2) {return 2;}
    //ROW 3: [6, 7 ,8]
    if (grid[6] === 1 && grid[7] === 1 && grid[8] === 1) {return 1;}
    if (grid[6] === 2 && grid[7] === 2 && grid[8] === 2) {return 2;}
    //COL 1: [0, 3, 6]
    if (grid[0] === 1 && grid[3] === 1 && grid[6] === 1) {return 1;}
    if (grid[0] === 2 && grid[3] === 2 && grid[6] === 2) {return 2;}
    //COL 2: [1, 4, 7]
    if (grid[1] === 1 && grid[4] === 1 && grid[7] === 1) {return 1;}
    if (grid[1] === 2 && grid[4] === 2 && grid[7] === 2) {return 2;}
    //COL 3: [2, 5, 8]
    if (grid[2] === 1 && grid[5] === 1 && grid[8] === 1) {return 1;}
    if (grid[2] === 2 && grid[5] === 2 && grid[8] === 2) {return 2;}
    //DIAGONAL 1: [0, 4, 8]
    if (grid[0] === 1 && grid[4] === 1 && grid[8] === 1) {return 1;}
    if (grid[0] === 2 && grid[4] === 2 && grid[8] === 2) {return 2;}
    //DIAGONAL 2: [2, 4, 6]
    if (grid[2] === 1 && grid[4] === 1 && grid[6] === 1) {return 1;}
    if (grid[2] === 2 && grid[4] === 2 && grid[6] === 2) {return 2;}
    //IF ANY OF ABOVE IS FULFILLED, DECLARE 1 OR 2 AS WINNER, ELSE 0 = NO ONE WINS
    if ((grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8] === 1) ||
     (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8] === 2) )
     {return 3;}
    else {return 0;}
    
};




//======= TTT INTERFACE =========

$(document).ready(function() {
    console.log("click on a cell to start");
}
);

//== Makes H3 disappear ==//
$('.cell').on('click', function (event){
    $('h3').html("");
    console.log('clicked');
    });

//== Makes playerTurn function run ==//
$('.cell').on('click', function (event){
    console.log(event);
    playTurn(parseInt(event.currentTarget.id));
    if (player === 1){$(this).addClass("player1");} 
    else if (player === 2){$(this).addClass("player2");}
    if (whoWon() === 1){
         console.log("player1 wins!");
         $('h3').html("Player 1 wins!");
         if(confirm("Player 1 wins. Play Again?")){window.location.reload();}
     }
     if (whoWon() === 2){
         console.log("player2 wins!");
         $('h3').html("Player 2 wins!");
        if(confirm("Player 2 wins. Play Again?")){window.location.reload();}
     }
     if (whoWon() === 3){
         console.log("It's a draw!");
         $('h3').html("It's a draw!");
        if(confirm("It's a draw. Play Again?")){window.location.reload();} 
         
     }
     
    });




