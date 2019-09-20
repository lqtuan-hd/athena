$(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                dotsContainer: '.owl-dots',
                // autoplay:true,
                // autoplayTimeout:3000,
              })
   });

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});