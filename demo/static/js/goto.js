$(document).ready(function() {
    $("#homemenu").find("section").each(function(index, elememt) {
        if (index == 0) {
            $(this).find("span").click(function() {
                window.location.replace("songlist.html");
            });
        }

    });
})
