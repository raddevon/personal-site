// Smooth scrolling for anchor links
$('a[href^="#"]').on('click',function (e) {
    // Prevent conflict with project sliders
    if (!$(this).parent().hasClass('slider-control')) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 400, 'easeInOutQuart', function () {
            window.location.hash = target;
        });
    }
});