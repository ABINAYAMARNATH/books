/*sticky navbar */
let navbar=$(".navbar");
$(window).scroll(function(){
    let .oTop=$(".sec-2").offset().top-window.innerHeight;
    if($(window).scrollTop()>oTop){
        navbar.addclass("sticky");
    }else{
        navbar.removeclass("sticky");
    }
})