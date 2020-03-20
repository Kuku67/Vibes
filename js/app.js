$(document).ready(function() {
    scrollButton();
    themeSwitch();
    lightbox();
    burgerMenu();
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

function themeSwitch() {
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
}

function lightbox() {
    $('.hidden').click(function() {
        var SourceImage = $(this).prev().attr('src');
        $('.lightbox-open').html("<img src='" + SourceImage + "'>");
        $('.lightbox-open').fadeIn("slow").css({ 'display': 'flex' });
        $('.lightbox-open img').css({ 'width': '512px', 'height': '349px' });
    });

    $('.lightbox-open').click(function() {
        $('.lightbox-open').fadeOut("fast");
    });
}

function burgerMenu() {
    $('.menu').click(function(){
        $('aside').toggleClass('down');
      });
      
      //Make sure the menu icon behaves corectly when the menu is open
      $('aside li a').click(function(){
          $('aside').toggleClass('down');
      });
}