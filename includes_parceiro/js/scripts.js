function functionMenu() {
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 0 && document.documentElement.clientWidth >= 768){
                $(".menu-bar").css({"height":"80px", "transition":"0.4s", "background-color":"white", "padding-top":"15px"});
                $("#menu-line").css({"background":"black"});
                $("#cssmenu > ul > li > a").css({"color":"black"});
                $("#cssmenu").css({"background-color":"white"});
                $("#btn-cadastro").css({"color":"black", "border-color":"black"});
                $("#logo-menu").attr("src", "includes_parceiro/imgs/logo2.png");
            }

            else if($(window).scrollTop() == 0 && document.documentElement.clientWidth >= 768){
                $(".menu-bar").css({"height":"100px", "transition":"0.4s", "background-color":"#3DA0E3", "padding-top":"25px"});
                $("#menu-line").css({"background":"white"});
                $("#cssmenu > ul > li > a").css({"color":"white"});
                $("#cssmenu").css({"background-color":"#3DA0E3"});
                $("#btn-cadastro").css({"color":"white", "border-color":"white"});
                $("#btn-cadastro:hover").css({"color":"black"});
                $("#logo-menu").attr("src", "includes_parceiro/imgs/logo.png");
            }

          
        });
    });
};

$(document).ready(function() {
    $(".rowPassoF .passo1").click(function(event) {
        $(".rowPassoF #passo1").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $(".rowPassoF #passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $(".rowPassoF #passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $(".rowPassoF #imgPasso1").fadeIn("slow");
        $(".rowPassoF #imgPasso2").css({"display":"none"});
        $(".rowPassoF #imgPasso3").css({"display":"none"});
    });

    $(".rowPassoF .passo2").click(function(event) {
        $(".rowPassoF #passo2").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $(".rowPassoF #passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $(".rowPassoF #passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $(".rowPassoF #imgPasso1").css({"display":"none"});
        $(".rowPassoF #imgPasso2").fadeIn("slow");
        $(".rowPassoF #imgPasso3").css({"display":"none"});
    });

    $(".rowPassoF .passo3").click(function(event) {
        $(".rowPassoF #passo3").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $(".rowPassoF #passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $(".rowPassoF #passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $(".rowPassoF #imgPasso1").css({"display":"none"});
        $(".rowPassoF #imgPasso2").css({"display":"none"});
        $(".rowPassoF #imgPasso3").fadeIn("slow");
    });

    $(".rowPassoI .passo1").click(function(event) {
        $(".rowPassoI #passo1").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $(".rowPassoI #passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $(".rowPassoI #passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $(".rowPassoI #imgPasso1").fadeIn("slow");
        $(".rowPassoI #imgPasso2").css({"display":"none"});
        $(".rowPassoI #imgPasso3").css({"display":"none"});
    });

    $(".rowPassoI .passo2").click(function(event) {
        $(".rowPassoI #passo2").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $(".rowPassoI #passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $(".rowPassoI #passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $(".rowPassoI #imgPasso1").css({"display":"none"});
        $(".rowPassoI #imgPasso2").fadeIn("slow");
        $(".rowPassoI #imgPasso3").css({"display":"none"});
    });

    $(".rowPassoI .passo3").click(function(event) {
        $(".rowPassoI #passo3").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $(".rowPassoI #passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $(".rowPassoI #passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $(".rowPassoI #imgPasso1").css({"display":"none"});
        $(".rowPassoI #imgPasso2").css({"display":"none"});
        $(".rowPassoI #imgPasso3").fadeIn("slow");
    });

    $('#titulo1').flowtype({
       minimum   : 320,
       maximum   : 1200,
       minFont   : 25,
       maxFont   : 50,
       fontRatio : 15
    });

    $('#desc1').flowtype({
       minimum   : 320,
       maximum   : 1200,
       minFont   : 14,
       maxFont   : 18,
       fontRatio : 30
    });

    $('#titulo2').flowtype({
       minimum   : 320,
       maximum   : 1200,
       minFont   : 25,
       maxFont   : 50,
       fontRatio : 30
    });

    $('#titulo21').flowtype({
       minimum   : 320,
       maximum   : 1200,
       minFont   : 25,
       maxFont   : 50,
       fontRatio : 30
    });

    $('#titulo5').flowtype({
       minimum   : 320,
       maximum   : 1200,
       minFont   : 25,
       maxFont   : 50,
       fontRatio : 30
    });

    $('#titulo6').flowtype({
       minimum   : 320,
       maximum   : 1200,
       minFont   : 35,
       maxFont   : 50,
       fontRatio : 20
    });

});