$(document).ready(function() {
    var imgarr = ["introduction", "enter", "enter", "market", "help"]
    var wordarr = ["快速導覽", "歡唱包廂", "OceanKTV Cloud", "QNAP市集", "幫助"]
    var linkarr = ["#", "http://172.17.34.41/OceanKTVConsole/#/app/favorite?favorId=7&favorName=%E6%B8%AC%E8%A9%A6&_key=oh4v64", "songlist.html", "#", "https://www.qnap.com/solution/ocean-ktv"]
        //popup window
    var popup_set = '<div class="popup"><a href="#" class="btn_close"><i class="delete"></i></a><h4>QNAP市集</h4><div class="tab"><ul><li class="tab_enable">下載應用程式</li><li>購買週邊</li></ul></div><form><div class="tab_hr"></div><ul class="tab_content">'
    popup_set += '<li><p>OceanKTV iOS/ Android是一支可以搭配QNAP OceanKTV的行動裝置應用程式，您可以用以操作QNAP NAS的KTV系統，進行點歌、調整音量、以及製造音效等等功能。<br>請注意：OceanKTV iOS/ Android無法單獨使用，必須搭配裝有OceanKTV的QNAP NAS才能使用。</p><div class="qrcode"><a href="https://www.qnap.com/mobileapp/oceanktv" target="_blank"><img src="static/images/qrcode.png"><p><b>安裝OceanKTV Client</b></p></a></div></li>'
    popup_set += '<li><p>即將推出更多OceanKTV周邊，敬請期待…</p><div class="coming_soon">Coming Soon</div></li>'
    popup_set += '</ul><button>確 定</button></form></div>'
        //--------------popup end
    $(".landing_item").find("li").each(function(index, el) {
        if (index == 4) {
            $(this).html("<a href=" + linkarr[index] + " target=" + "_blank" + "><img src=" + "static/images/" + imgarr[index] + "_normal.png" + " data-alt-src=" + "static/images/" + imgarr[index] + "_hover.png><p>" + wordarr[index] + "</p></a>");
        } else {
            $(this).html("<a href=" + linkarr[index] + "><img src=" + "static/images/" + imgarr[index] + "_normal.png" + " data-alt-src=" + "static/images/" + imgarr[index] + "_hover.png><p>" + wordarr[index] + "</p></a>");
        }
        var sourceSwap = function() {
            var $this = $(this);
            var newSource = $this.data('alt-src');
            $this.data('alt-src', $this.attr('src'));
            $this.attr('src', newSource);
        }
        $(this).find('img[data-alt-src]').each(function() {
            new Image().src = $(this).data('alt-src');
        }).hover(sourceSwap, sourceSwap);
    });
    $(".landing_item").find("li").eq(3).click(function(event) { //app store
        $(".maskbg").show();
        $(".maskbg").html(popup_set);
        //--------------------------tab
        $(".tab_content").find('li').eq(1).hide();
        $(".tab").find('li').each(function(i, el) {
            if (i == 0) {
                $(this).click(function(event) {
                    $(this).addClass('tab_enable');
                    $(this).siblings().removeClass('tab_enable');
                    $(".tab_content").find('li').eq(0).show();
                    $(".tab_content").find('li').eq(1).hide();
                    console.log("tab1")
                });
            }
            if (i == 1) {
                $(this).click(function(event) {
                    $(this).addClass('tab_enable');
                    $(this).siblings().removeClass('tab_enable');
                    $(".tab_content").find('li').eq(1).show();
                    $(".tab_content").find('li').eq(0).hide();
                    console.log("tab2")
                });
            }
        });
        //-------------------------tab end
        $(".btn_close").click(function(event) {
            $(".maskbg").toggle().css('zIndex', '1000');
            $(".navbar").find("a").eq(4).removeClass("header_actived");
        });
        $(".popup").find("button").eq(1).click(function(event) {
            $(".maskbg").toggle().css('zIndex', '1000');
            $(".navbar").find("a").eq(4).removeClass("header_actived");
            $("#bgvid").removeClass('bg' + localStorage.getItem("changebg_test"));
            $("#bgvid").addClass('bg' + localStorage.getItem("changebg"));
        });
        $("button").eq(0).click(function(event) {
            $(".maskbg").toggle().css('zIndex', '1000');
            $(".navbar").find("a").eq(4).removeClass("header_actived");
            var cbg = localStorage.getItem("changebg_test")
            localStorage.setItem("changebg", cbg)
        });
    });
    $(".landing_item").find("li").eq(0).click(function(event) { //tutorial
        tFunction();
    });


function tFunction() { //quick tutorial
        var progress = '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>'
        var t1 = '<div class="popup"><a href="#" class="btn_close"><i class="delete"></i></a><div class="tutorial"><img src="static/images/img_quicktutorial_p1_en.png" /><p>感謝您選擇 QNAP NAS 並使用 Ocean KTV。<br>有了 Ocean KTV，您的 NAS 就能搖身一變成為一台人人都愛的伴唱機！<br>以下導覽將協助您了解 Ocean KTV 的使用方法。</p><div class="btn_start">開始導覽</div></div></div>'
        var t2 = '<div class="popup"><a href="#" class="btn_close"><i class="delete"></i></a><h4>快拿出你的平板電腦或手機，使用行動裝置點歌</h4><hr><div class="t_content"><p>除了透過電視或電腦的 Ocean KTV 點歌之外，您也可以透過行動裝置點歌。馬上掃描QRcode下載 Ocean KTV 應用程式！</p><img src="static/images/img_quicktutorial_p2_en.png" /></div><button class="btn_next">下一步</button><button class="btn_pre">上一步</button>' + progress + '</div>'
        var t3 = '<div class="popup"><a href="#" class="btn_close"><i class="delete"></i></a><h4>將您收藏的歌曲匯入 Ocean KTV</h4><hr><div class="t_content"><ul><li>KTV歌曲與電影皆屬於影片檔案，由於無法分辨出何者為KTV檔案，您必須手動將您蒐藏的歌曲匯入專屬的資料夾。</li><li>1. 請將您的歌曲存放在OceanKTV資料夾或是其他您自行建立的資料。</li><li>2. 前往設定內的〔資料夾來源〕將該資料夾設定為OceanKTV使用，則該資料夾內的影片會被視為KTV檔案。</li></ul><p class="tip">請注意：建議使用電腦開啟QTS進行匯入步驟。</p><img src="static/images/img_quicktutorial_p2.png" /></div><button class="btn_next">下一步</button><button class="btn_pre">上一步</button>' + progress + '</div>'
        var t4 = '<div class="popup"><a href="#" class="btn_close"><i class="delete"></i></a><h4>編輯歌曲名稱</h4><hr><div class="t_content"><p>您可以透過OceanKTV Console的歌曲編輯功能修改檔名，以在OceanKTV中藉由歌曲資料找到歌曲。</p><img src="static/images/img_quicktutorial_p3.png" /></div><button>開始歡唱</button><button>上一步</button>' + progress + '</div>'
        var t = 0;
        $(".maskbg").fadeToggle(1000);
        $(".maskbg").css('zIndex', '9999');
        $(".maskbg").html(t1 + t2 + t3 + t4);
        $(".popup").eq(t).show();
        $(".popup").eq(t).siblings().hide();
        $(".rule").click(function(event) { //help
            $("#menumain").hide();
            $(".maskbg").empty();
            $(".maskbg").show();
            $(".maskbg").append('<div class="help_c"><div class="btn_close_help"><i class="delete"></i></div><div class="help"></div></div>');
            $(".help_c").css('top', '0');
            $(".help").load("help.html");
            $(".btn_close_help").click(function(event) {
                $(".maskbg").toggle().css('zIndex', '1000');
                $(".navbar").find("a").eq(4).removeClass("header_actived");
            });
        });
        $(".popup").each(function(index, el) {
            $(".btn_start").click(function(event) {
                t = 1;
                $(".popup").eq(t).show();
                $(".popup").eq(t).siblings().hide();
            });
            $(this).find("button").eq(1).click(function(event) {
                t--;
                $(".popup").eq(t).show();
                $(".popup").eq(t).siblings().hide();
            });
            $(this).find("button").eq(0).click(function(event) {
                if (index > 2) {
                    $(".maskbg").toggle().css('zIndex', '1000');
                } else {
                    t++;
                    $(".popup").eq(t).show();
                    $(".popup").eq(t).siblings().hide();
                }

            });
            if (index == 0) {
                $(this).css('height', '564px');
                $(".btn_start").css('margin-top', '45px');
            }
            if (index == 1) {
                $(this).find(".progress-bar").css('width', '33%');
                $(this).find("p").css('padding-bottom', '45px');
                $(this).css('height', '556px');
            }
            if (index == 2) {
                $(this).find(".progress-bar").css('width', '66%');
                $(this).css('height', '556px');
            }
            if (index == 3) {
                $(this).find("p").css('height', '84px');
                $(this).find(".progress-bar").css('width', '100%');
                $(this).css('height', '556px');
            }
            $(this).find(".btn_close").click(function(event) {
                $(".maskbg").toggle().css('zIndex', '1000');
            });
        });
    }

})
