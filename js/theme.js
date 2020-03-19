$(document).ready(function() {
    $('#theme-switch').click(function() {
        $('body').toggleClass('switch');
        $('.fa-tint').toggleClass('tint-switch');
    });
});