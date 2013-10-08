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

//Replace social links with icons
$('#social-links').find('a[href]').each(function(i, e) {
    // Maps social domains to the HTML to insert their respective icons
    var socialIcons = {
        'twitter.com': '<i class="icon-twitter"></i>',
        'github.com': '<i class="icon-github"></i>',
        'dribbble.com': '<i class="icon-dribbble"></i>',
        'facebook.com': '<i class="icon-facebook"></i>',
        'plus.google.com': '<i class="icon-gplus"></i>',
        'linkedin.com': '<i class="icon-linkedin"></i>'
    }
    // Extracts the domain from the element's href property
    var domain = e.href.split('/')[2]
    // Loop through socialIcons looking for the domain in the element href's domain. Replace HTML if a match is found and end the loop.
    for (var key in socialIcons) {
        if (domain.indexOf(key) !== -1) {
            $(e).html(socialIcons[key]);
            break;
        }
    }
});

// Initialize responsive nav
var nav = responsiveNav('.nav-collapse');
