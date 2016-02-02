$(document).ready(function() {
    $(".box").click(function(){
        $(".box").animate({height:"300px"});
        $(".box").animate({width:"300px"});
        $(".box").animate({height:"100px"});
        $(".box").animate({width:"100px"});
    });
});