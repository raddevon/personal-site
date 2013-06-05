$('[data-expando]').on('click', function() {
    if (anyExpandoOn) {
        $('#overlay').show();
    } else {
        $('#overlay').hide();
    }
});

$('#overlay').on('click', function() {
    $('#overlay').hide();
    expandoCloseAll(null, $('#expando-wrapper'));
});