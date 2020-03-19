$(document).ready(function() {
    lightbox();
});

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