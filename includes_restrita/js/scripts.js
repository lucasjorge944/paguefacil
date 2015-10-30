$(document).ready(function() {
	$("#procurar-adesivo").click(function(event) {
		$("#metodo-pagamento").fadeOut("slow");
		$("#infos-pagamento").fadeOut("slow");
		$("#infos-pagamento").fadeIn("slow");
	});
	$("#placas").change(function(event) {
		$("#metodo-pagamento").fadeOut("slow");
		$("#infos-pagamento").fadeOut("slow");
		$("#infos-pagamento").fadeIn("slow");
	});
	$("#pagar").click(function(event) {
		$("#metodo-pagamento").fadeOut("slow");
		$("#metodo-pagamento").fadeIn("slow");
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