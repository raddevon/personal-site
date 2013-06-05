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