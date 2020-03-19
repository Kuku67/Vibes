$(document).ready(function() {
    scrollButton();
});

function scrollButton() {
    $('#page-up').hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $('#page-up').fadeIn();
        } else {
            $('#page-up').fadeOut();
        }
    });

    $('#page-up').click(function() {
        $('html, body').scrollTop(0);
    });
}