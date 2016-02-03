$(document).ready(function() {
    $(".box").click(function(){
        $("#Jon").animate({left: '+=130px', top:"+=120px"});
        $("#Jack").animate({left: '-=130px', top:"+=120px"});
        $("#Jim").animate({left: '+=130px', top:"-=120px"});
        $("#Sen").animate({left: '-=130px', top:"-=120px"});
    });    
});

