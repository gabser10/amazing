function inizializzaMappa() {
    
    var myLatlng = new google.maps.LatLng(41.8966, 12.4827);
    var myLatlng2 = new google.maps.LatLng(41.8914, 12.4927);
	 var myLatlng3 = new google.maps.LatLng(41.8972, 12.4720);

    var myOptions = {
	zoom: 15,
	center: myLatlng3,
	mapTypeId: google.maps.MapTypeId.SATELLITE,

	styles: [
	    {
		"featureType": "poi.business",
		"elementType": "labels",
		"stylers": [{ "visibility": "off" }]
	    }
	],

	mapTypeControl: true,
	mapTypeControlOptions: {
	    style: google.maps.MapTypeControlStyle.DEFAULT,
	    position: google.maps.ControlPosition.LEFT_BOTTOM
	},

	zoomControl: true,
	zoomControlOptions: {
	  style: google.maps.ZoomControlStyle.DEFAULT,
	  position: google.maps.ControlPosition.RIGHT_BOTTOM      
	},

	streetViewControl: true,
	streetViewControlOptions: {
	  position: google.maps.ControlPosition.RIGHT_BOTTOM
	},

	panControl: true,
	panControlOptions: {
	  position: google.maps.ControlPosition.RIGHT_BOTTOM
	},

	scaleControl: false,
	overviewMapControl: false	

    };
	      
    var map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);
      	
    var contentString = '<div class="popup">'+'<img src="http://www.amazingsuiterome.com/img/png/logo_amazingsuiterome.png" width="70" style="margin-left:40px" />' + '<h5>Amazing Suite Vittoriano</h5>' + '<p>via Cesare Battisti 127<br>00184 Roma, Italia</p>' + '</div>';
    var contentString2 = '<div class="popup">'+'<img src="http://www.amazingsuiterome.com/img/png/logo_amazingsuiterome.png" width="70" style="margin-left:40px" />' + '<h5>Amazing Suite Colosseo</h5>' + '<p>via Nicola Salvi 68<br>00184 Roma, Italia</p>' + '</div>';
    var contentString3 = '<div class="popup">'+'<img src="http://www.amazingsuiterome.com/img/png/logo_amazingsuiterome.png" width="70" style="margin-left:40px" />' + '<h5>Amazing Suite Navona</h5>' + '<p>Corso Vittorio Emanuele II 173<br>00186 Roma, Italia</p>' + '</div>';

        
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
	 var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    var image = {
	url: 'img/png/marker.png',
	// This marker is 20 pixels wide by 32 pixels high.
	size: new google.maps.Size(32, 32),
	// The origin for this image is (0, 0).
	origin: new google.maps.Point(0, 0),
	// The anchor for this image is the base of the flagpole at (0, 32).
	anchor: new google.maps.Point(0, 32)
    };
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        title: 'Amazing Suite Colosseo'
    });
    var marker2 = new google.maps.Marker({
        position: myLatlng2,
        map: map,
        icon: image,
        title: 'Amazing Suite Vittoriano'
    });
	var marker3 = new google.maps.Marker({
        position: myLatlng3,
        map: map,
        icon: image,
        title: 'Amazing Suite Navona'
    });
	
    
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map, marker);
    });
        infowindow2.open(map, marker2);
    google.maps.event.addListener(marker2, 'click', function() {
	infowindow2.open(map, marker2);
    });
  infowindow3.open(map, marker3);
    google.maps.event.addListener(marker3, 'click', function() {
	infowindow3.open(map, marker3);
    });


}
