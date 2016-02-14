/**
 * Add class to nav when page scrolls
 */
$(window).scroll(function () {
    if ($(this).scrollTop() < 30) {
        $('nav').removeClass('scroll');
    } else {
        $('nav').addClass('scroll');
    }
});

/**
 * Scroll to anchor om page
 */
function scrollToAnchor(anchor, offset, time){

    $('html, body').animate({
        scrollTop: $(anchor).offset().top - offset
    }, time);
    return false;
}

$(document).ready(function()
{
    var hash = window.location.hash;

    $('.to-anchor').bind('click', function(){
        var anchor = $(this).attr('target-anchor');

        scrollToAnchor(anchor, -155, 500);

        $(document).find('li.current').removeClass('current');
        $(this).closest('li').addClass('current');
    });

    if(hash){
        $(document).find('a.current').removeClass('current');
        $('.to-anchor[target-anchor="' + hash + '"]').addClass('current');
        setTimeout(function() {
            scrollToAnchor(hash, -155, 500);
        },50)
    }

});
