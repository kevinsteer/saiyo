window.onload=function(){
var didScroll;
var lastScrollTop = 0;
var pm = $('#PM').offset().top;
var jb = $('#jobs').offset().top;
var wp = $('#workplace').offset().top;
var fl = $('#flow').offset().top;    
var delta = 400;
var delay = 600;
var navbarHeight = $('header').outerHeight();

//on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
    didScroll = true;
});   
    
//run hasScrolled() and reset didScroll Status
setInterval(function(){
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 350);

function hasScrolled() {
    //do stuff here
    var st = $(this).scrollTop();
    
    if(st == jb){ 
        return;
    } else if (st == pm){
        return;
    } else if (st == wp){
        return;
    } else if (st == fl){
        return;
    }
    
    if (st < delay){ delta = 400;
 } else { 
    delta = 5;}
    
    if (Math.abs(lastScrollTop-st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('header').addClass('menu-wrapper-hide');
    } else {
        if(st + $(window).height() + 100 < $(document).height()) {
            $('header').removeClass('menu-wrapper-hide');
        }
    }
    
    lastScrollTop = st;
}
}