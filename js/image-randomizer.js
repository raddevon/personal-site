var images = 3;
var currentBackground = Math.floor(Math.random() * images + 1);

$('header').css('background', 'url(img/header-' + currentBackground + '.jpg) center / cover no-repeat fixed');