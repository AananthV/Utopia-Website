var CARBON_EMISSION_FACTOR = 0.527;
var INDIA_AVERAGE = 3.073;
var INDIA_AVERAGE_CARBON = INDIA_AVERAGE*CARBON_EMISSION_FACTOR;
class Item {
  constructor(name, wattage, hours, number, people) {
    this.name = name;
    this.wattage = wattage;
    this.hours = hours;
    this.number = number;
    this.people = people;
    this.inColumn = false;
  }
  get Name(){
    return this.name;
  }
  get Footprint(){
    return this.calcFootprint();
  }
  calcFootprint() {
    return this.number*this.wattage*this.hours*CARBON_EMISSION_FACTOR/1000/this.people;
  }
}
var Items = [];
function buttonPress(){
  var name = document.getElementById("nameOfAppliance").value;
  var wattage = document.getElementById("wattageOfAppliance").value;
  var timeUsed = document.getElementById("timeUsed").value;
  var number = document.getElementById("numberOfAppliance").value;
  var people = document.getElementById("numberOfPeople").value;
  if(name == ""){
    name = "Appliance";
  }
  if(wattage <= 0 || timeUsed <= 0 || number <= 0 || people <= 0) {
    alert("Enter Values Greater Than Zero.");
  } else {
    Items.push(new Item(name, wattage, timeUsed, number, people));
    updateSite();
  }
  document.getElementById("nameOfAppliance").value = '';
  document.getElementById("wattageOfAppliance").value = '';
  document.getElementById("timeUsed").value = '';
  document.getElementById("numberOfAppliance").value = '';
}

function removeButtonPress(fid){
  fid = fid.split(" ");
  var id = parseInt(fid[1]);
  var rightColumn = document.getElementById("rightColumn");
  rightColumn.removeChild(document.getElementById("card"+id));
  Items.splice(id, 1);
  for(var j = id; j < Items.length; j++){
    document.getElementById("rmbtn " + t).id = "rmbtn " + j;
    document.getElementById("card" + t).id = "card" + j;
  }
  updateSite();
}

function updateSite() {
  var rightColumn = document.getElementById("rightColumn");
  var carbonEmitted = 0;
  for(j in Items) {
    var i = Items[j];
    carbonEmitted += i.Footprint;
    if(i.inColumn === false) {
      var card = document.createElement("div");
      card.id = "card" + j;
      card.className = "card";
      var cardBody = document.createElement("div");
      cardBody.className = "card-body";

      var cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.innerHTML = i.Name;
      var cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerHTML = i.Footprint + "kg of CO2";
      var removeButton = document.createElement("button");
      removeButton.className = "btn btn-sm btn-outline-danger";
      removeButton.id = "rmbtn " + j;
      removeButton.onclick = function() { removeButtonPress(this.id);};
      removeButton.innerHTML = "Remove";

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(removeButton);

      card.appendChild(cardBody);
      rightColumn.appendChild(card);

      i.inColumn = true;
    }
  }
  move(carbonEmitted);
  displayFootprint = document.getElementById("displayFootprint");
  displayFootprint.innerHTML = "Your daily Carbon Footprint is "+carbonEmitted+" kg/day";
}
function move(carbonEmitted) {
  maxWidth = 100*carbonEmitted/(4*INDIA_AVERAGE_CARBON);
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 25);
  function frame() {
    if (width >= maxWidth) {
      $('#myBar').css("width", width + '%').attr("aria-valuenow", width).text(carbonEmitted + "kg/day");
      clearInterval(id);
    } else {
      width++;
      $('#myBar').css("width", width + '%').attr("aria-valuenow", width).text(carbonEmitted + "kg/day");
    }
  }
}
