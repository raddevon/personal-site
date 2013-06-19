function anyExpandoOn () {
    return !! ($('[data-expando].on').length);
}

function toggleCollapseAll () {
    var expandoContainer = $($('[data-expando].on').data('expando')).parent();
    //  If at least one element with the data-expando attribute also has the on class, add a collaps all button to the top of the expando container
    if (anyExpandoOn()) {
        expandoContainer.prepend($('.expando-close').slideDown(400, 'easeInOutQuart'));
        $('#overlay').show();
    //  otherwise hide the button
    } else {
        $('.expando-close').slideUp(400, 'easeInOutQuart');
        $('#overlay').hide();
    }
}

function expandoToggle (event, target) {
    //  If the function is called by a click event, suppress the default browser behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // If the target argument is not passed, make the data-expando value for the current element the target. Target is required if the function is called manually.
    target = typeof target !== 'undefined' ? target : $($(this).data('expando'));
    var clicked = $(this);

    expandoCloseAll(null, target.parent());

    //  Add the last clicked expando to the top of the expando container and add the on class to links targetting it
    if (target.css('display') === 'none') {
        target.prependTo(target.parent()).slideDown(400, 'easeInOutQuart');
        $('[data-expando]').each( function() {
            if ($(this).data('expando') === clicked.data('expando')) {
                $(this).addClass('on');
            }
        });
    //  Hide the expando container and remove the on class from links targetting it
    } else {
        target.slideUp(400, 'easeInOutQuart');
        $('[data-expando]').each( function() {
            if ($(this).data('expando') === clicked.data('expando')) {
                $(this).removeClass('on');
            }
        });
    }

    toggleCollapseAll();
}

function expandoOff (event, target) {
    //  If the function is called by a click event, suppress the default browser behavior
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // If the target argument is not passed, make the data-expando value for the current element the target. Target is required if the function is called manually.
    target = typeof target !== 'undefined' ? target : $($(this).data('expando'));
    var clicked = $(this);

    // Close the expando
    target.slideUp(400, 'easeInOutQuart');

    // Give each element with the data-expando attribute pointing to the just toggled element the on class.
    $('[data-expando]').each( function() {
        if ($(this).data('expando') === clicked.data('expando')) {
            $(this).removeClass('on');
        }
    });
}

function expandoCloseAll (event, expandoContainer) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
        $('.expando-close').slideUp(400, 'easeInOutQuart');
    }

    // Find the data-target attribute of the clicked element
    var closeTarget = expandoContainer || $($(this).find('a').data('target'));

    // Loop through expandos in the container and toggle them if they are currently displayed
    closeTarget.find('.expando').each( function() {
        if ($(this).css('display') !== 'none') {
            expandoOff(event, $(this));
        }
    });

    // Remove on classes from anything targetting the closed expandos
    $('[data-expando]').each( function() {
        $(this).removeClass('on');
    });

    // Animate out the close button
    $('#overlay').hide();
}

$(document).ready( function() {
    $('[data-expando]').on('click', expandoToggle);
    $('.expando-close').on('click', expandoCloseAll);
    $('.expando').css('display', 'none');
});