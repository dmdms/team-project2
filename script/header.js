$(function(){
    mainNav();
    menu();
}); 

function mainNav(){
    $("#gnb > li").mouseenter(function(){
        $(this).children("a").addClass("on");
        $(".lnb, .subMenuBg").stop().slideDown("fast")
    });
    $("#gnb > li").mouseleave(function(){
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

function menu(){
    $('.menu_bar').click(function(){
        $('.nav').show();
        $('.login').show();
        $('#sidePannel').show();
        $('.menu_bar').hide();
        $('.menu_x').show();
    });
    $('.menu_x').click(function(){
        $('.nav').hide();
        $('.login').hide();
        $('#sidePannel').hide();
        $('.menu_bar').show();
        $('.menu_x').hide();
    });
  
}