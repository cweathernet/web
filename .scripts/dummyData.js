// command to run is 'mongo cwd dummyData.js'

for (var i = 10000 - 1; i >= 0; i--) {
  
  var temperature = Math.random()*40;
  var humidity = Math.random()*100;
  var pressure = Math.random()*1;
  var location  = getRandomLocation()

  var data = {
    temperature: temperature,
    humidity: humidity,
    pressure: pressure,
    location: location
  }

  db.weather.insert(data);
};

function getRandomLocation() {
  var lat = 170 * Math.random() - 85; 
  var lon = 360 * Math.random() - 180;
  return [lat, lon];
}
