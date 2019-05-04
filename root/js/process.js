let letter =null;
$('#x').on('click' , function () {
    letter = true;
});
$('#o').on('click' , function () {
    letter = false;
});


const move = function(e) {
        if (letter === true) {
            $(e.target).children('h3').text('X');
            letter = false;
        }

        else if (letter !== true) {
            $(e.target).children('h3').text('O');
            letter = true;
        }
};
$('.container').on('click', move);





