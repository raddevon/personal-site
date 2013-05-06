function displayElements(elements, mode) {
    elements.each(function() {
        $(this).css('display', mode);
    });
}

function hideElements(elements) {
    elements.each(function() {
        $(this).css('display', 'none');
    });
}

function toggleControls(mode) {
    // Show slider controls at desktop width and higher
    if ($(window).width() > 1024){
        displayElements($('.slider-control'), mode);
    } else {
        hideElements($('.slider-control'));
    }
}

function projectSliderToggle(event){
    event.preventDefault();

    var sliderToggle = $(this).find('i');
    var projectRow = $(this).closest('.project-wrap');
    var projectImage = projectRow.find('[data-picture]');
    var newLeft;

    // If the project image is outside the viewport, the new left position will be the starting position
    if (projectImage.offset().left < 0 || projectImage.offset().left >= $(window).width() - 1) {
        newLeft = 0;
    // If no and the arrow points left, the new left position is negative the width of the image to push it out of the viewport
    } else if (sliderToggle.hasClass('icon-left')) {
        newLeft = '-' + projectImage.outerWidth() + 'px';
    // If no and the arrow points right, the left left is positive the width of the image
    } else if (sliderToggle.hasClass('icon-right')) {
        newLeft = projectImage.outerWidth() + 'px';
    }

    // Move the entire project row to new left position
    projectRow.animate({ left: newLeft }, 400, 'easeInOutQuart');

    // Change the control to point the opposite direction
    sliderToggle.toggleClass('icon-left');
    sliderToggle.toggleClass('icon-right');
}

$(document).ready( function() {
    $('.slider-control').on('click', projectSliderToggle);
    toggleControls('table-cell');

});

$(window).resize(function() {
    toggleControls('table-cell');
});