
$(function () {
    $('.tab-btn').on('click', function () {
        var tabWrap = $(this).parents('.tab-wrap');
        var tabBtn = tabWrap.find(".tab-btn");
        var tabContents = tabWrap.find('.tab-contents');
        tabBtn.removeClass('show');
        $(this).addClass('show');
        var elmIndex = tabBtn.index(this);
        tabContents.removeClass('show');
        tabContents.eq(elmIndex).addClass('show');
    });
});



