/* Adding class to body for overlay in mobile menu */
$('.navbar').on('shown.bs.collapse', function () {
    // alert('animation complete');
    $('body').addClass('mobile-menu-open');
})

/* Removing class from body for overlay in mobile menu */
$('.navbar').on('hidden.bs.collapse', function () {
    // alert('animation complete');
    $('body').removeClass('mobile-menu-open');
})