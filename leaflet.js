const initialCoordinates = [212060071, -504380251];
const initialZoomLevel = 13;

var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);