function expandoToggle (event) {
    event.preventDefault();
    var expando = $($(this).data('expando'));
    expando.prependTo(expando.parent()).slideToggle(400, 'easeInOutQuart');
    $(this).toggleClass('on');
}

function expandoCloseAll (event) {
    event.preventDefault();
    var expandoContainer = $($(this).data('target'));
    expandoContainer.find('.expando').each( function() {
        if ($(this).css('display') !== 'none') {
            expandoToggle();
        }
    });
}

$(document).ready( function() {
    $('[data-expando]').on('click', expandoToggle);
    $('.expando-collapse').on('click', expandoCloseAll);
    $('.expando').css('display', 'none');
});