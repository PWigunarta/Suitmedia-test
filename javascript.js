$(".dropdown").hover(function() {
    $(".dropdown .dropdown-menu").css("display", "block");
}, function() {
    $(".dropdown .dropdown-menu").css("display","none");
})

$(".about").click(function() {
    $(".dropdown-mobile .dropdown-item").toggleClass("open");
    if($(".dropdown-mobile .dropdown-item").hasClass("open")){
        $(".dropdown-mobile .dropdown-item").css("display", "block");
    }else{
        $(".dropdown-mobile .dropdown-item").css("display", "none");
    }
    
})

$(".hamburger").click(function() {
    $(".dropdown-mobile").toggleClass("open");
    console.log("hamburger clicked")
    if($(".dropdown-mobile").hasClass("open")){
        console.log("dropdown opened")
        $(".dropdown-mobile").css("display", "block");
        $(".dropdown-mobile .dropdown-item").css("display", "none");
    }else{
        console.log("dropdown closed")
        $(".dropdown-mobile").css("display", "none");
    }

})