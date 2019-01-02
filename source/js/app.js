$(document).ready()
{
    /*$(function () {
        $('.today-navigation a').click(function () {
            $(this).parents('.today-tabs').find('.today-wrap').addClass('hide');
            $(this).parent().siblings().removeClass('active');
            var id = $(this).attr('href');
            $(id).removeClass('hide');
            $(this).parent().addClass('active');
            return false
        });
    });*/

    var r_click = 0;
    $(".feedback__show-button").on("click", function () {
        r_click++;
        if (r_click == 2) {
            var id_r = $('#slider-scroll');
            var top_r = $(id_r).offset().top;
            $('body,html').animate({scrollTop: top_r}, 500);
            r_click = 0;
        } else {
            return;
        }
    });

    /*________slider-comments-show+scroll________*/
    $(".feedback__show-button").click(function (e) {
        var block = $(this).siblings(".feedback__comment");

        block.toggleClass("feedback__comment-active");
        $(this).toggleClass("feedback__show-button-active");
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}



