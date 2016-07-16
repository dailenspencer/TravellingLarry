$(document).ready(function() {


//Locations Page
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".GreenLand-header-fade").css("opacity", 0 + $(window).scrollTop() / 1000);
    $(".page-wrap-conf").css("opacity", 0 + $(window).scrollTop() / 1000);
    $(".GreenLand-header-fade").css("opacity", 0 + $(window).scrollTop() / 1000);
    if(scroll < 861){
      $(".Norway-header-fade").css("opacity", 1 - ($(window).scrollTop()) / 1000);
    }
    if(scroll > 861){
      $(".Norway-header-fade").css("opacity", 0 + ($(window).scrollTop()-861) / 1000);
    }
    if(scroll < 1725){
      $(".Vietnam-header-fade").css("opacity", 1 - ($(window).scrollTop()-725) / 1000);
    }
    if(scroll > 1725){
      $(".Vietnam-header-fade").css("opacity", 0 + ($(window).scrollTop()-1725) / 1000);
      
    }
    if(scroll < 2589){
      $(".Space-header-fade").css("opacity", 1 - ($(window).scrollTop()-589) / 1000);
    }
    if(scroll > 2589){
      $(".Space-header-fade").css("opacity", 0 + ($(window).scrollTop()-2589) / 1000);
      $(".MountKiliminjaro-header-fade").css("opacity", 1 - ($(window).scrollTop()-2589) / 1000);
    }
});




})