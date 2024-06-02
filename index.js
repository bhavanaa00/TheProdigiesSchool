$(document).ready(function() {
    $(".carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    $(".btn-left").click(function() {
            $(".carousel").trigger('owl.prev');
        });
    
        $(".btn-right").click(function() {
            $(".carousel").trigger('owl.next');
        });
});

$(document).ready(function() {
    $(".carousel-in").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    $(".btn-left-in").click(function() {
            $(".carousel-in").trigger('owl.prev');
        });
    
        $(".btn-right-in").click(function() {
            $(".carousel-in").trigger('owl.next');
        });
});
