$(document).ready(function() {
    $('#theme-switch').click(function() {
        $('body').toggleClass('switch');
        if ($('body').hasClass('switch')) {
            $(':root').css('--theme', 'red');
            $(':root').css('--themergba', 'rgba(255, 0, 0, 0.486)');
        } else {
            $(':root').css('--theme', '#FF1EA9');
            $(':root').css('--themergba', 'rgba(255, 30, 169, 0.452)');
        }
    });
});