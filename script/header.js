$(function(){
    mainNav();
}); 

function mainNav(){
    $("#gnb > li, .subMenuBg").mouseenter(function(){
        $(this).children("a").addClass("on");
        $(".lnb, .subMenuBg").stop().slideDown("fast")
    });
    $("#gnb > li, .subMenuBg").mouseleave(function(){
        $(this).children("a").removeClass("on");
        $(".lnb, .subMenuBg").stop().slideUp("fast")
    });
    $(".lnb > li").mouseenter(function(){
        $(this).children("a").addClass("sub")
    });
    $(".lnb > li").mouseleave(function(){
        $(this).children("a").removeClass("sub")
    });
}