$(document).ready(function(){

    const headerSlider = $(".owl-carousel");
    headerSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false
    });

    $('#hederSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel', [300]);
    })
    
    $('#hederSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel');
    })
    
});