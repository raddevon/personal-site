function expandoToggle (event) {
    event.preventDefault();
    var expando = $('#' + $(this).data('expando'));
    expando.prependTo(expando.parent()).slideToggle(400, 'easeInOutQuart');
}

$(document).ready( function() {
    $('[data-expando]').on('click', expandoToggle);
});