$(function() {
    //задание заполнителя с помощью параметра placeholder
    $("#callback-form-input-phone").mask("+380 (99) 999-99-99");
});
$(function() {
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});