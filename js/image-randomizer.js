var images = 3;
var currentBackground = Math.floor(Math.random() * images + 1);

$('header').addClass('background-' + currentBackground);