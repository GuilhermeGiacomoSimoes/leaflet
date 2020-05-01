const coordinates = [-21.206288, -50.438914];
const zoomDefault = 20;

const mymap = L.map('mapid').setView(coordinates, zoomDefault);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?' + 
            'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom:     20,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                 '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id:          'mapbox/streets-v11',
    tileSize:    512,
    zoomOffset:  -1
}).addTo(mymap);

L.marker([-21.239985, -50.405172])
    .addTo(mymap)
    .bindPopup("<b>Hello world!</b><br />I am a gas station.")
    .openPopup();

L.circle([-21.235222, -50.407101], 100, {
    color:      'red',
    fillColor:  '#f03',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

L.polygon([
    [-21.206288, -50.438914],
    [-21.236112, -50.408834],
]).addTo(mymap).bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);