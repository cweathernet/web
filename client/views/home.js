Meteor.startup(function () {
  $(window).resize(function() {
    var height = $(window).height();
    $('#map-canvas').height(height);
  });
});

Template.home.rendered = function(){
  map =  new Gmaps("map-canvas",'pac-input')
  GoogleMaps.init({ 'sensor': true, 'libraries': 'places'}, 
    function(){
      map.init.bind(map)()
      var lng = Router.current().params.lng;
      var lat = Router.current().params.lat;
      if(lat && lng){
        map.setCenter(lat, lng);
      } else {
        map.showCurrentLocation();
      }
    });


}