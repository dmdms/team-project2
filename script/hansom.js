$(function(){
    tab();
    booklist();
    mainNav();
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
	})
}
