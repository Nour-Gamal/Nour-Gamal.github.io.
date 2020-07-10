$(document).ready(function(){

/*Start toolBox Section*/


/*Showing and hiding toolbox */

$('.gear-box').on('click',function(){

$('.color-box').fadeToggle(500);


});

/*Changing site theme */

var liTheme=$('.color-box ul li');

liTheme
.eq(0).css('backgroundColor','#ff1e56').end()
.eq(1).css('backgroundColor','#649d66').end()
.eq(2).css('backgroundColor','#844685').end()
.eq(3).css('backgroundColor','#98d6ea');


liTheme.on('click',function(){


$('link[href*="theme"]').attr("href",$(this).attr("data-value"));


});

/*End toolBox Section*/

/*Start Loading section */

$(window).on("load",function(){

$(".loading-overlay").fadeOut(2000,function(){


    $('body').css('overflow','auto');


});
});



/*End Loading section */

/*Start button up section */

$(window).on("scroll",function(){

 $(this).scrollTop()>=700 ? $('.fa-chevron-up').fadeIn(500):$('.fa-chevron-up').fadeOut(500);


});

$('.fa-chevron-up').on("click",function(){

    $("html,body").animate({scrollTop:0});
    
    
    });
    



/*End button up section */

});
