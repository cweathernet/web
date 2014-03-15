// Meteor.startup(function () {
//   GoogleMaps.init({ 'sensor': true, 'libraries': 'places'}, new Gmaps("map-canvas",'pac-input') );
// });



Template.home.rendered = function(){
  var map =  new Gmaps("map-canvas",'pac-input')

  GoogleMaps.init({ 'sensor': true, 'libraries': 'places'}, map.init.bind(map));
}