$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_nav_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});