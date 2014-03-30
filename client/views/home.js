Meteor.startup(function () {
  $(window).resize(function() {
    var height = $(window).height();
    $('#map-canvas').height(height);
  });
});

Template.home.rendered = function(){
  var map =  new Gmaps("map-canvas",'pac-input')
  GoogleMaps.init({ 'sensor': true, 'libraries': 'places'}, map.init.bind(map));
}