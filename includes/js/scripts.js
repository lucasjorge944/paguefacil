function functionMenu() {
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 0 && document.documentElement.clientWidth >= 768){
                $(".menu-bar").css({"height":"80px", "transition":"0.4s", "background-color":"white", "padding-top":"15px"});
                $("#menu-line").css({"background":"black"});
                $("#cssmenu > ul > li > a").css({"color":"black"});
                $("#cssmenu").css({"background-color":"white"});
                $("#btn-cadastro").css({"color":"black", "border-color":"black"});
                $("#logo-menu").attr("src", "includes/imgs/logo2.png");
            }

            else if($(window).scrollTop() == 0 && document.documentElement.clientWidth >= 768){
                $(".menu-bar").css({"height":"100px", "transition":"0.4s", "background-color":"#3DA0E3", "padding-top":"25px"});
                $("#menu-line").css({"background":"white"});
                $("#cssmenu > ul > li > a").css({"color":"white"});
                $("#cssmenu").css({"background-color":"#3DA0E3"});
                $("#btn-cadastro").css({"color":"white", "border-color":"white"});
                $("#btn-cadastro:hover").css({"color":"black"});
                $("#logo-menu").attr("src", "includes/imgs/logo.png");
            }

          
        });
    });
};

$(document).ready(function() {
    $(".passo1").click(function(event) {
        $("#passo1").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $("#passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $("#passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $("#imgPasso1").fadeIn("slow");
        $("#imgPasso2").css({"display":"none"});
        $("#imgPasso3").css({"display":"none"});
    });

    $(".passo2").click(function(event) {
        $("#passo2").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $("#passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $("#passo3").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $("#imgPasso1").css({"display":"none"});
        $("#imgPasso2").fadeIn("slow");
        $("#imgPasso3").css({"display":"none"});
    });

    $(".passo3").click(function(event) {
        $("#passo3").css({"color":"white", "background-color":"#ff863b", "transitions":"0.7s"});
        $("#passo2").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});
        $("#passo1").css({"color":"#ff863b", "background-color":"white", "transitions":"0.7s"});

        $("#imgPasso1").css({"display":"none"});
        $("#imgPasso2").css({"display":"none"});
        $("#imgPasso3").fadeIn("slow");
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
       minFont   : 25,
       maxFont   : 50,
       fontRatio : 30
    });

    function initialize() {
      var mapCanvas = document.getElementById('map');
      var mapOptions = {
        center: new google.maps.LatLng(-19.9251795, -43.9264983),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(mapCanvas, mapOptions);

      var myLatLng = {lat: -19.9251795, lng: -43.9264983};
      var myLatLng2 = {lat: -19.925696, lng: -43.924488};
      var myLatLng3 = {lat: -19.925076, lng: -43.923721};
      var myLatLng4 = {lat: -19.926574, lng: -43.924219};

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
      });
      var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map
      });
      var marker3 = new google.maps.Marker({
        position: myLatLng3,
        map: map
      });
      var marker4 = new google.maps.Marker({
        position: myLatLng4,
        map: map
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

});