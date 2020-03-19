$(document).ready(function() {
    $('.fa-tint').click(function() {
        if ($('.pink').hasClass('.pink')) {
            $('.pink').removeClass('.pink').addClass('.red');
        }
        if ($('.pink-btn').hasClass('.pink-btn')) {
            $('.pink-btn').removeClass('.pink-btn').addClass('.red-btn');
        }
        if ($('.pink-bdr').hasClass('.pink-bdr')) {
            $('.pink-bdr').removeClass('.pink-bdr').addClass('.red-bdr');
        }
        if ($('.pink-bgc').hasClass('.pink-bgc')) {
            $('.pink-bgc').removeClass('.pink-bgc').addClass('.red-bgc');
        }
    })
});