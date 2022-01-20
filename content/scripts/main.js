/* Adding class to body for overlay in mobile menu */
$('.navbar').on('shown.bs.collapse', function () {
    $('body').addClass('mobile-menu-open');
})

/* Removing class from body for overlay in mobile menu */
$('.navbar').on('hidden.bs.collapse', function () {
    $('body').removeClass('mobile-menu-open');
})