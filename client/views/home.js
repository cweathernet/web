Template.home.rendered = function() {  
  GoogleMaps.init(
      {
          'sensor': true, //optional
      }, 
      function(){
          var mapOptions = {
              zoom: 13,
              // mapTypeId: google.maps.MapTypeId.SATELLITE
          };
          map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
          map.setCenter(new google.maps.LatLng( 6.927078600000000000, 79.861243000000060000 ));
      }
  );
};