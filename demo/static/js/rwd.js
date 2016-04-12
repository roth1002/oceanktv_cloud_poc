jQuery(document).ready(function($) {
    var popup_video = '<div class="mask"><div class="popup"><a href="#" class="btn_close"><i class="btn_preview_close"></i></a><video width="400" controls></video></div></div>'
        // Touch friendly expanded nav
    $('ul.navmenu li span').click(function(event) {

        event.preventDefault();

        // get the child of the clicked menu switch
        var child_menu = $(this).parent().children('ul');
        // get the parent link of the clicked menu switch
        var parent_link = $(this).parent();
        // check if it's currently open or closed
        if (child_menu.hasClass('childopen')) {
            // if it's open, close it

            // remove any "active" class from parent item
            $(parent_link).removeClass('active');
            // hide child menu
            $(child_menu).removeClass('childopen');
            // set this open menu switch to +
            $(this).html('<i class="ic_submenu_open"></i>');

        } else {
            // if it's closed, open it

            // hide any open child menus
            $('ul.navmenu ul').removeClass('childopen');
            // set any open menu switch symbols back to +
            $('ul.navmenu li span').html('<i class="ic_submenu_open"></i>');
            // remove any existing "active" class from menus
            $('.active').removeClass('active');

            // add "active" class to this parent item
            $(parent_link).addClass('active');
            // show correct child menu
            $(child_menu).addClass('childopen');
            // set this open menu switch to -
            $(this).html('<i class="ic_submenu_close"></i>');

            return false;

        }


    });
    $(".menu-item").find("li>div").click(function(event) {
        console.log("popup action bar.");
    });
    $(".billboard").find('img').click(function(event) {
        console.log("popup video preview.");
        /*$("body").prepend(popup_video);
        $(".popup").find(".btn_close").click(function(event) {
            $(".mask").remove();
        });*/
    });
    $('.toolbar').hide();
    $('.pagination').hide();
    $(".mainmenu").find('li').each(function(index, el) {
        $(this).click(function(event) {
            $(".foot_bar").hide();
            $(".listview").find('h1').text($(this).text());
            console.log("index:" + index);
            if (index == 0) {
                $('.menu-item > ul').eq(index).addClass('show');
                $('.menu-item > ul').eq(index).siblings().removeClass('show');
                $('.toolbar').hide();
            } else {
                $('.menu-item > ul').eq(1).addClass('show');
                $('.menu-item > ul').eq(0).removeClass('show');
                $('.menu-item > ul').eq(0).addClass('closed');
                $('.toolbar').show();
            }
            if (index == 4) {
                $('.submenu').hide();
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            } else {
                $(".submenu > ul").eq(index).addClass('show');
                $(".submenu > ul").eq(index).siblings().removeClass('show');
                if ($(this).is('.active')) {
                    $('.submenu').toggle();
                    $(this).toggleClass('active');
                } else {
                    $('.submenu').show();
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                }
            }
        });
    });
    $('.ic_topbar_Search_normal').click(function() {
        if ($('#search_bar').css('display') == 'none') {
            $('#search_bar').addClass('show');
            $('.navemenu').removeClass('show');
        } else {
            $('#search_bar').removeClass('show');
            $('.navemenu').removeClass('show');
        }
    });
    $('.navicon').click(function() {
        if ($('.navemenu').css('display') == 'none') {
            if ($('.ic_topbar_Search_normal').css('display') == 'none') {
                $('.search').addClass('show');
                $(".mainmenu").css('z-index', '99');
            }
            $('.navemenu').addClass('show');
            $('#search_bar').removeClass('show');
        } else {
            $('.navemenu').removeClass('show');
            $('.search').removeClass('show');
        }
    });
    $('.btn_tv').click(function(event) {
        $(".foot_bar").toggle();
    });
    // Responsive iframes
    function responsiveIframe() {
        $('iframe').each(function() {
            var iw = $(this).width();
            var ih = $(this).height();
            var ip = $(this).parent().width();
            var ipw = ip / iw;
            var ipwh = Math.round(ih * ipw);
            $(this).css({
                'width': ip,
                'height': ipwh,
            });
        });
    }

    responsiveIframe();

    // Trigger video resize if browser is resized
    $(window).resize(function() {
        responsiveIframe();
    });

    // Watch body height to see if font size settings are changed
    var watch_el = $('body');
    var el_height = watch_el.innerHeight();

    window.setInterval(function() {
        var new_height = watch_el.innerHeight();
        if (new_height != el_height) {
            el_height = new_height;
            responsiveIframe();
        }
    }, 200);

});
