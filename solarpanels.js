var overall_map = L.map('overall-map').setView([10.768671,78.816366], 16);
var field1_map = L.map("field1-map").setView([10.766091,78.821805], 17);
var field2_map = L.map("field2-map").setView([10.768439,78.816087], 17);
var field3_map = L.map("field3-map").setView([10.771350,78.814031], 17);
var customfield_map = L.map("customfield-map", {
  center: [10.768671,78.816366],
  zoom: 16,
  measureControl: true
});

/*customfield_map.on('measurefinish', function(evt) {
  writeResults(evt);
});
function writeResults(results) {
  document.getElementById('eventoutput').innerHTML = JSON.stringify(
    {
      area: results.area,
      areaDisplay: results.areaDisplay,
      lastCoord: results.lastCoord,
      length: results.length,
      lengthDisplay: results.lengthDisplay,
      pointCount: results.pointCount,
      points: results.points
    },
    null,
    2
  );
}*/

/*var areaSelect = L.areaSelect({width: 200, height: 300});
areaSelect.addTo(customfield_map);
// Read the bouding box
var bounds = areaSelect.getBounds();

// Get a callback when the bounds change
areaSelect.on("change", function() {
    console.log("Bounds:", this.getBounds());
});*/

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 16,
    maxZoom: 16,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(overall_map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 17,
    maxZoom: 17,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(field1_map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 17,
    maxZoom: 17,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(field2_map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 17,
    maxZoom: 17,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(field3_map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 16,
    maxZoom: 19,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(customfield_map);

var outerBoundary = L.polygon([
  [10.764478,78.804229],
  [10.766535,78.806601],
  [10.766451,78.807298],
  [10.767130,78.807596],
  [10.766993,78.808208],
  [10.767373,78.808454],
  [10.766723,78.811868],
  [10.767879,78.811716],
  [10.768480,78.811266],
  [10.768901,78.811459],
  [10.768722,78.812253],
  [10.770128,78.812313],
  [10.775134,78.813861],
  [10.774931,78.816949],
  [10.773071,78.818032],
  [10.772897,78.820477],
  [10.767537,78.822245],
  [10.762821,78.824717],
  [10.755906,78.826706],
  [10.751732,78.826025],
  [10.754072,78.818784],
  [10.757586,78.811932],
  [10.759993,78.808628],
  [10.763651,78.805400]
], {
  color: 'black',
  fillOpacity: 0.1
}).addTo(overall_map);

var outerBoundaryOne = L.polygon([
  [10.764478,78.804229],
  [10.766535,78.806601],
  [10.766451,78.807298],
  [10.767130,78.807596],
  [10.766993,78.808208],
  [10.767373,78.808454],
  [10.766723,78.811868],
  [10.767879,78.811716],
  [10.768480,78.811266],
  [10.768901,78.811459],
  [10.768722,78.812253],
  [10.770128,78.812313],
  [10.775134,78.813861],
  [10.774931,78.816949],
  [10.773071,78.818032],
  [10.772897,78.820477],
  [10.767537,78.822245],
  [10.762821,78.824717],
  [10.755906,78.826706],
  [10.751732,78.826025],
  [10.754072,78.818784],
  [10.757586,78.811932],
  [10.759993,78.808628],
  [10.763651,78.805400]
], {
  color: 'black',
  fillOpacity: 0.1
}).addTo(field1_map);

var outerBoundaryTwo = L.polygon([
  [10.764478,78.804229],
  [10.766535,78.806601],
  [10.766451,78.807298],
  [10.767130,78.807596],
  [10.766993,78.808208],
  [10.767373,78.808454],
  [10.766723,78.811868],
  [10.767879,78.811716],
  [10.768480,78.811266],
  [10.768901,78.811459],
  [10.768722,78.812253],
  [10.770128,78.812313],
  [10.775134,78.813861],
  [10.774931,78.816949],
  [10.773071,78.818032],
  [10.772897,78.820477],
  [10.767537,78.822245],
  [10.762821,78.824717],
  [10.755906,78.826706],
  [10.751732,78.826025],
  [10.754072,78.818784],
  [10.757586,78.811932],
  [10.759993,78.808628],
  [10.763651,78.805400]
], {
  color: 'black',
  fillOpacity: 0.1
}).addTo(field2_map);

var outerBoundaryThree = L.polygon([
  [10.764478,78.804229],
  [10.766535,78.806601],
  [10.766451,78.807298],
  [10.767130,78.807596],
  [10.766993,78.808208],
  [10.767373,78.808454],
  [10.766723,78.811868],
  [10.767879,78.811716],
  [10.768480,78.811266],
  [10.768901,78.811459],
  [10.768722,78.812253],
  [10.770128,78.812313],
  [10.775134,78.813861],
  [10.774931,78.816949],
  [10.773071,78.818032],
  [10.772897,78.820477],
  [10.767537,78.822245],
  [10.762821,78.824717],
  [10.755906,78.826706],
  [10.751732,78.826025],
  [10.754072,78.818784],
  [10.757586,78.811932],
  [10.759993,78.808628],
  [10.763651,78.805400]
], {
  color: 'black',
  fillOpacity: 0.1
}).addTo(field3_map);


var solarZoneOne = L.polygon([
  [10.764806,78.820860],
  [10.764869,78.822426],
  [10.765238,78.823187],
  [10.767737,78.822136],
  [10.767642,78.820527]
], {
  color: 'gray',
  fillOpacity: 0.8
}).addTo(overall_map);

var solarZoneOneOne = L.polygon([
  [10.764806,78.820860],
  [10.764869,78.822426],
  [10.765238,78.823187],
  [10.767737,78.822136],
  [10.767642,78.820527]
], {
  color: 'gray',
  fillOpacity: 0.8
}).addTo(field1_map);

var solarZoneTwo = L.polygon([
  [10.769811,78.814431],
  [10.769776,78.816951],
  [10.767236,78.817069],
  [10.767088,78.814442]
], {
  color: 'gray',
  fillOpacity: 0.8
}).addTo(overall_map);

var solarZoneTwoTwo = L.polygon([
  [10.769811,78.814431],
  [10.769776,78.816951],
  [10.767236,78.817069],
  [10.767088,78.814442]
], {
  color: 'gray',
  fillOpacity: 0.8
}).addTo(field2_map);

var solarZoneThree = L.polygon([
  [10.770103,78.813277],
  [10.770103,78.814704],
  [10.772956,78.814737],
  [10.772998,78.814061],
  [10.771775,78.813310]
], {
  color: 'gray',
  fillOpacity: 0.8
}).addTo(overall_map);

var solarZoneThreeThree = L.polygon([
  [10.770103,78.813277],
  [10.770103,78.814704],
  [10.772956,78.814737],
  [10.772998,78.814061],
  [10.771775,78.813310]
], {
  color: 'gray',
  fillOpacity: 0.8
}).addTo(field3_map);

solarZoneOne.bindPopup("Proposed Solar Field 1");
solarZoneTwo.bindPopup("Proposed Solar Field 2");
solarZoneThree.bindPopup("Proposed Solar Field 3");
solarZoneOneOne.bindPopup("Proposed Solar Field 1");
solarZoneTwoTwo.bindPopup("Proposed Solar Field 2");
solarZoneThreeThree.bindPopup("Proposed Solar Field 3");
outerBoundary.bindPopup("National Institute of Technology, Tiruchirapalli");
