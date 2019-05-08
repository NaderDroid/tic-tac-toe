let letter = null;
let input = [];
let winner = false;
let p1 = 0;
let p2 = 0;
let tie = 0;
let tieCounter = 0;

const showWinner = function (c1,c2,c3 , winner) {
    $(c1).addClass('winner');
    $(c2).addClass('winner');
    $(c3).addClass('winner');
    if (!winner) {
        p1++
    }
    else if (winner) {
        p2++
    }

    $('#o').text(p2);
    $('#x').text(p1);

};
const checkWinner = function () {
    if (input[0] !== undefined) {
        if (input[0] === input[1] && input[1] === input[2]) {
            showWinner('#cell-1 > h3' , '#cell-2 > h3' , '#cell-3 > h3' , letter);
            winner = true;
        }

        if (input[0] === input[3] && input[3] === input[6]) {
            showWinner('#cell-1 > h3' , '#cell-4 > h3' , '#cell-7 > h3' , letter);
            winner = true;
        }
    }

     if (input[2] !== undefined) {

        if (input[2] === input[5] && input[5] === input[8]) {
            showWinner('#cell-3 > h3' , '#cell-6 > h3' , '#cell-9 > h3' , letter);
            winner = true;

        }

    }
     if (input[4] !== undefined) {
        if (input[0] === input[4] && input[4] === input[8]) {
            showWinner('#cell-1 > h3' , '#cell-5 > h3' , '#cell-9 > h3' , letter);
            winner = true;

        }
        else if (input[2] === input[4] && input[4] === input[6]) {
            showWinner('#cell-3 > h3' , '#cell-5 > h3' , '#cell-7 > h3' , letter);
            winner = true;

        }
        else if (input[1] === input[4] && input[4] === input[7]) {
            showWinner('#cell-2 > h3' , '#cell-5 > h3' , '#cell-8 > h3' , letter);
            winner = true;
        }
        else if (input[3] === input[4] && input[4] === input[5]) {
            showWinner('#cell-4 > h3' , '#cell-5 > h3' , '#cell-6 > h3' , letter);
            winner = true;
        }
    }
    if (input[6] !== undefined) {

        if (input[6] === input[7] && input[7] === input[8]) {
            showWinner('#cell-7 > h3' , '#cell-8 > h3' , '#cell-9 > h3' , letter);
            winner = true;
        }
    }
     if (tieCounter === 9 && winner !== true) {
         tie++;
         $('#restie').text(tie);
     }
};

const move = function (e) {

    if (winner !== true) {
        if (letter === true) {
            if ($(e.target).children('h3').val() === '') {

                $(e.target).children('h3').text('X');
                let num = $(e.target).children('h3').attr('about');
                parseInt($(e.target).children('h3').attr('about'));
                input[num] = 'x';
                letter = false;
                tieCounter++;
                checkWinner();
            } else {
                swal('Invalid' , 'Spot is already taken');

            }
        } else if (letter !== true) {
            if ($(e.target).children('h3').val() === '') {
                $(e.target).children('h3').text('O');
                letter = true;
                let num = $(e.target).children('h3').attr('about');
                parseInt($(e.target).children('h3').attr('about'));
                input[num] = 'o';
                tieCounter++;
                checkWinner();
            }
        }
    }
    else {
        resetBoard();
    }
};

const resetBoard = function () {
    $('.game-board div h3').text('');
    $('.game-board div h3').removeClass('winner');
    letter = false;
    winner = false;
    tieCounter = 0;
    input.length = 0;

};
$('.game-board').on('click', move);
$('#reset').on('click' , resetBoard);
$('.pc').on('click' , function() {
    swal('This feature will be available in the next iteration');
});
$('.two-players').on('click' , function() {
    window.location.href = 'index.html';
});

