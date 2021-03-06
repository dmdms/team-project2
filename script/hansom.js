$(function(){
    tab();
    booklist();
    mainNav();
    mobiletab();
    menu();
});
function mainNav(){
    $("#gnb > li").mouseenter(function(){
        $(this).children("a").addClass("on");
        $(".lnb, .subMenuBg").stop().slideDown("fast");
    });
    $("#gnb > li").mouseleave(function(){
        $(this).children("a").removeClass("on");
        $(".lnb, .subMenuBg").stop().slideUp("fast");
    });
    $(".lnb > li").mouseenter(function(){
        $(this).children("a").addClass("sub");
    });
    $(".lnb > li").mouseleave(function(){
        $(this).children("a").removeClass("sub");
    });

}
function booklist(){
    $(".list-icon a:first").addClass("active");
    $(".list-icon a:first").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".book-list2").hide();
        $(".book-list1").show();
    });
    $(".list-icon a:last").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".book-list1").hide();
        $(".book-list2").show();
    });
}
function tab(){	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
}
function mobiletab(){	
	$('.tabs-m li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs-m li').removeClass('current');
		$('.tab-cont').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
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
