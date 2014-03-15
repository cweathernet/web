Gmaps = function(elementId, inputElId ,options){
  this.options = options || {};
  this.options.zoom = this.options.zoom || 13;
  this.elementId = elementId;
  this.inputElId = inputElId;
}

Gmaps.prototype.init = function() {
  this.options.mapTypeId = this.options.mapTypeId || google.maps.MapTypeId.ROADMAP;
  
  var mapOptions = {
      zoom: this.options.zoom,
      mapTypeId: this.options.mapTypeId 
  };
  this.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
  this.map.setCenter(new google.maps.LatLng( 35.363556, 138.730438 ));

  var input = (document.getElementById(this.inputElId));

  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  this.searchBox = new google.maps.places.SearchBox((input));
  this.markers = [];
  google.maps.event.addListener(this.searchBox, 'places_changed', this._placeChanged.bind(this))
};

Gmaps.prototype.setCenter = function(lat, lng) {
  this.map.setCenter(new google.map.LatLng(lat, lng));
};

Gmaps.prototype._placeChanged = function() {
  var places = this.searchBox.getPlaces();
  this.markers.forEach(function(marker){
    marker.setMap(null);
  });
  this.markers = [];
  var bounds = new google.maps.LatLngBounds();

  for (var i = 0, place; place = places[i]; i++) {
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    bounds.extend(place.geometry.location);
  }
  this.map.fitBounds(bounds);
  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    this.searchBox.setBounds(bounds);
  });
};