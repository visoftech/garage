function InitMap() {
  var latlng = new google.maps.LatLng(36.557694, 139.927596);
  var myOptions = {
    zoom: 16,
    center: latlng,
    mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] }
  };

  var map = new google.maps.Map(document.getElementById('map_custmomize'), myOptions);

  var icon = new google.maps.MarkerImage('./images/map_logo.png',
    new google.maps.Size(214, 68),
    new google.maps.Point(0, 0)
  );

  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'GR Garage螳��螳ｮ縺､縺上ｋ縺ｾ蟾･謌ｿ',
  };

  var marker = new google.maps.Marker(markerOptions);
  /*蜿門ｾ励せ繧ｿ繧､繝ｫ縺ｮ雋ｼ繧贋ｻ倥￠*/
  var styleOptions = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#353535"
      }]
    },
    {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#5b5b5b"
      }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#5b5b5b"
      }]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5b5b5b"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5b5b5b"
      }]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#5b5b5b"
      }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#ffffff"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#d0001a"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#222222"
      }]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#2b2b2b"
      }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#2b2b2b"
      }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }
  ]
  var styledMapOptions = { name: 'GR Garage' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('style', sampleType);
  map.setMapTypeId('style');
};
google.maps.event.addDomListener(window, 'load', function() {
  googleMap();
});