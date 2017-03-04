$(document).ready(function(){
    
    $('.fancybox').fancybox({
        padding: '0',
        closeBtn: false,
    });
    $('.modalwindow').fancybox({
        padding: '0',
        closeBtn: false,
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
            return false;
        }
        }
    });
    
    $('.slider_1').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
            }
        ]        
    });
    
    $('.slider_2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
            }
        ]        
    });
    
    $('.slider_3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
            }
        ]        
    });
});