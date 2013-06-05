function anyExpandoOn () {
    return !! ($('[data-expando].on').length);
}

function toggleCollapseAll () {
    var expandoContainer = $($('[data-expando].on').data('expando')).parent();
    //  If at least one element with the data-expando attribute also has the on class, add a collaps all button to the top of the expando container
    if (anyExpandoOn()) {
        expandoContainer.prepend($('.expando-close').slideDown(400, 'easeInOutQuart'));

    //  otherwise hide the button
    } else {
        $('.expando-close').slideUp(400, 'easeInOutQuart');
    }
}

function expandoToggle (event, target) {
    //  If the function is called by a click event, suppress the default browser behavior
    if (event) {
        event.preventDefault();
    }

    // If the target argument is not passed, make the data-expando value for the current element the target. Target is required if the function is called manually.
    target = typeof target !== 'undefined' ? target : $($(this).data('expando'));
    var clicked = $(this);

    //  Add the last clicked expando to the top of the expando container
    if (target.css('display') === 'none') {
        target.prependTo(target.parent()).slideDown(400, 'easeInOutQuart');
    } else {
        target.slideUp(400, 'easeInOutQuart');
    }

    // Give each element with the data-expando attribute pointing to the just toggled element the on class.
    $('[data-expando]').each( function() {
        if ($(this).data('expando') === clicked.data('expando')) {
            $(this).toggleClass('on');
        }
    });

    toggleCollapseAll();
}

function expandoCloseAll (event, expandoContainer) {
    if (event) {
            event.preventDefault();
    }

    // Find the data-target attribute of the clicked element
    var closeTarget = expandoContainer || $($(this).find('a').data('target'));

    // Loop through expandos in the container and toggle them if they are currently displayed
    closeTarget.find('.expando').each( function() {
        if ($(this).css('display') !== 'none') {
            expandoToggle(event, $(this));
        }
    });

    // Remove on classes from anything targetting the closed expandos
    $('[data-expando]').each( function() {
        $(this).removeClass('on');
    });

    // Animate out the close button
    $('.expando-close').slideUp(400, 'easeInOutQuart');
}

$(document).ready( function() {
    $('[data-expando]').on('click', expandoToggle);
    $('.expando-close').on('click', expandoCloseAll);
    $('.expando').css('display', 'none');
});