$(document).ready(function() {
    var settings_w = $('#settings').innerWidth();
    var tab_W = $(".popup_window").find('.tabs ul').width();
    $(".popup_window").find('.open_tab:not(:eq(0))').hide();
    $(".tabs").find('li').each(function(index, el) {
        $(this).click(function(event) {
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
            $(".popup_window").find('.open_tab').eq(index).show();
            $(".popup_window").find('.open_tab').eq(index).siblings().hide();
        });
    });
    $(".dropmenu").find('li').each(function(index, el) {
        $(this).hover(function() {
            $(this).addClass('mouseover');
            $(this).parent().removeClass('mouseover');
            $(this).siblings().removeClass('mouseover');
        }, function() {
            $(this).removeClass('mouseover');
        });
        if (index == 1) {
            $(".btn_page_next").click(function(event) {
                $(this).parent().addClass('focus');
                var d_l = $(this).parent().parent().position().left;
                var d_w = $(this).parent().parent().width();
                $(this).parent().children('.dropmenu').toggle();
                $(this).parent().children('.dropmenu').css({
                    left: d_w + d_l + 1,
                    marginTop: '-40px'
                });
            });
            $(".ic_submenu_open").click(function(event) {
                $(this).parent().addClass('focus');
                $(this).parent().children('.dropmenu').toggle();
                $(this).parent().children('.dropmenu').css({
                    left: 0,
                    marginTop: 0
                });
            });
        } else {
            $(this).removeClass('focus');
            $(this).find('.dropmenu').children('.dropmenu').hide();
        }
        console.log(index + ":" + $(this).text());
    });
    $(window).resize(function(){
    $('.select').hide();
});
});
