// Create the map (same as before)
var map = L.map('map').setView([0, 0, 100]);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
// Load data for each layer
var layer1, layer2;
fetch('ne_110m_admin_1_states_provinces_shp.geojson').then(res => res.json()).then(data => { layer1 = L.geoJSON(data) });
fetch('countries.geojson').then(res => res.json()).then(data => { layer2 = L.geoJSON(data) });
// Handle layer 1 toggle
document.getElementById('toggleLayer1').addEventListener('click', function() {
    if(map.hasLayer(layer1)) {
        map.removeLayer(layer1);
    } else {
        map.addLayer(layer1);
    }
});
// Handle layer 2 toggle
document.getElementById('toggleLayer2').addEventListener('click', function(){
    if(map.hasLayer(layer2)){
        map.removeLayer(layer2)
    }else {
        map.addLayer(layer2)
    }
})
