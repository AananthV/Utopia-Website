var overall_map = L.map('overall-map').setView([10.764617,78.814765], 15);
var academic_map = L.map("academic-map").setView([10.759797,78.814662], 16);
var hostel_map = L.map("hostel-map").setView([10.765123,78.815327], 16);
var residential_map = L.map("residential-map").setView([10.757537,78.821647], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 15,
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(overall_map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 16,
    maxZoom: 16,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(academic_map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 16,
    maxZoom: 16,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(hostel_map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 16,
    maxZoom: 16,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWFuYW50aHYiLCJhIjoiY2p0eWM4bGtxMGczMzQzcjMycmRtejM1ayJ9.1AV59-crnVxbuei-4sZipQ'
}).addTo(residential_map);

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

var outerBoundaryAcademic = L.polygon([
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
}).addTo(academic_map);

var outerBoundaryHostel = L.polygon([
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
}).addTo(hostel_map);

var outerBoundaryResidential = L.polygon([
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
}).addTo(residential_map);

var academicZone = L.polygon([
  [10.763643,78.805330],
  [10.764399,78.806457],
  [10.761891,78.810511],
  [10.761785,78.812055],
  [10.761574,78.812098],
  [10.761733,78.818479],
  [10.756472,78.818813],
  [10.756345,78.816110],
  [10.758032,78.816346],
  [10.757863,78.811842],
  [10.760781,78.808106]
], {
  fillOpacity: 0.5
}).addTo(overall_map);

var academicacademicZone = L.polygon([
  [10.763643,78.805330],
  [10.764399,78.806457],
  [10.761891,78.810511],
  [10.761785,78.812055],
  [10.761574,78.812098],
  [10.761733,78.818479],
  [10.756472,78.818813],
  [10.756345,78.816110],
  [10.758032,78.816346],
  [10.757863,78.811842],
  [10.760781,78.808106]
], {
  fillOpacity: 0.5
}).addTo(academic_map);

var hostelZone = L.polygon([
  [10.761805,78.810412],
  [10.763618,78.811057],
  [10.764527,78.811964],
  [10.769827,78.813096],
  [10.769869,78.817751],
  [10.769447,78.817793],
  [10.769595,78.819016],
  [10.767181,78.818885],
  [10.767181,78.818306],
  [10.761773,78.818542],
  [10.761562,78.812129],
  [10.761857,78.811636]
], {
  color: 'red',
  fillOpacity: 0.5
}).addTo(overall_map);

var hostelhostelZone = L.polygon([
  [10.761805,78.810412],
  [10.763618,78.811057],
  [10.764527,78.811964],
  [10.769827,78.813096],
  [10.769869,78.817751],
  [10.769447,78.817793],
  [10.769595,78.819016],
  [10.767181,78.818885],
  [10.767181,78.818306],
  [10.761773,78.818542],
  [10.761562,78.812129],
  [10.761857,78.811636]
], {
  color: 'red',
  fillOpacity: 0.5
}).addTo(hostel_map);

var residentialZone = L.polygon([
  [10.763203,78.818466],
  [10.762978,78.823077],
  [10.757233,78.823328],
  [10.757254,78.825172],
  [10.751883,78.825643],
  [10.754117,78.818930]
], {
  color: 'green',
  fillOpacity: 0.5
}).addTo(overall_map);

var residentialresidentialZone = L.polygon([
  [10.763203,78.818466],
  [10.762978,78.823077],
  [10.757233,78.823328],
  [10.757254,78.825172],
  [10.751883,78.825643],
  [10.754117,78.818930]
], {
  color: 'green',
  fillOpacity: 0.5
}).addTo(residential_map);

residentialZone.bindPopup("Residential Zone");
residentialresidentialZone.bindPopup("Residential Zone");
hostelZone.bindPopup("Hostel Zone");
hostelhostelZone.bindPopup("Hostel Zone");
academicZone.bindPopup("Academic Zone");
academicacademicZone.bindPopup("Academic Zone");
outerBoundary.bindPopup("National Institute of Technology, Tiruchirapalli");
