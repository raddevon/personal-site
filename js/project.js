$('[data-expando]').on('click', function() {
    if (anyExpandoOn) {
        $('#overlay').show();
    } else {
        $('#overlay').hide();
    }
});

$('#overlay').on('click', function(e) {
    $('#overlay').hide();
    expandoCloseAll(e, $('#expando-wrapper'));
});

// Smooth scrolling for anchor links
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': ($target.offset()) ? $target.offset().top : 0
    }, 400, 'easeInOutQuart', function () {
        window.location.hash = target;
    });
});