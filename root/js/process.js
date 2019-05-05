let letter = null;
let input = [];
let winner = false;

$('#x').on('click', function () {
    letter = true;
});
$('#o').on('click', function () {
    letter = false;
});

const checkWinner = function () {
    if (input[0] !== undefined) {
        if (input[0] === input[1] && input[1] === input[2]) {
            console.log('The winner is "' + input[0].toUpperCase() + '"');
            winner = true;
        }

        if (input[0] === input[3] && input[3] === input[6]) {
            console.log('The winner is "' + input[0].toUpperCase() + '"');
            winner = true;
        }
    }

    if (input[2] !== undefined) {

        if (input[2] === input[5] && input[5] === input[8]) {
            console.log('The winner is "' + input[2].toUpperCase() + '"');
            winner = true;

        }

    }
    if (input[4] !== undefined) {
        if (input[0] === input[4] && input[4] === input[8]) {
            console.log('The winner is "' + input[0].toUpperCase() + '"');
            winner = true;

        }
        if (input[2] === input[4] && input[4] === input[6]) {
            console.log('The winner is "' + input[2].toUpperCase() + '"');
            winner = true;

        }
        if (input[1] === input[4] && input[4] === input[7]) {
            console.log('The winner is "' + input[1].toUpperCase() + '"');
            winner = true;
        }
        if (input[3] === input[4] && input[4] === input[5]) {
            console.log('The winner is "' + input[3].toUpperCase() + '"');
            winner = true;
        }
    }
    if (input[6] !== undefined) {

        if (input[6] === input[7] && input[7] === input[8]) {
            console.log('The winner is "' + input[6].toUpperCase() + '"');
            winner = true;
        }
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
                checkWinner();
            } else {
                alert('Invalid space');
            }
        } else if (letter !== true) {
            if ($(e.target).children('h3').val() === '') {
                $(e.target).children('h3').text('O');
                letter = true;
                let num = $(e.target).children('h3').attr('about');
                parseInt($(e.target).children('h3').attr('about'));
                input[num] = 'o';
                checkWinner();
            } else {
                alert('Invalid space');
            }
        }
    } else {
        alert('Game Over, Buddy');
    }
};

const resetGame = function () {
    location.reload();
};
$('#reset').on('click', resetGame);
$('.game-board').on('click', move);



