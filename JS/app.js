'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


var allLocations = [];

var hoursTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var divTable = document.getElementById('divTable');

var table = document.createElement('table');

divTable.appendChild(table);
//-----------------------------------------

function SalmonStore(location , minCustomersPerHour , maxCustomersPerHour, avgCookies ){

  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookies = avgCookies;
  this.customersPerHour = [];
  this.cookiesPerHour = [],
  this.dailyTotal = 0;
  allLocations.push(this);
  console.log(this.customersPerHour);
  this.randomNumber();

}

//----------------------------------------
function addHeader() {
  var headerRow = document.createElement('tr');
  var th = document.createElement('th');

  th.textContent = 'Table' ;
  headerRow.appendChild(th);

  for (var x = 0; x < hours.length; x++){
    th = document.createElement('th');
    th.textContent = hours[x] ;
    headerRow.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily Total' ;
  headerRow.appendChild(th);
  table.appendChild(headerRow);
}


//---------------------------------------


function addFooter() {

  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td = document.createElement('td');
  td.textContent = 'total';
  tr.appendChild(td);

  var totalOfTotals = 0;
  for(var i=0; i < hours.length; i++){
    td = document.createElement('td');
    var hourTotal = 0;
    for(var j=0; j < allLocations.length; j++){
      hourTotal += allLocations[j].cookiesPerHour[i];
    }
    td.textContent = hourTotal;
    totalOfTotals += hourTotal;
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = totalOfTotals;
  tr.appendChild(td);
}




//-------------------------------------------


SalmonStore.prototype.randomNumber = function(){
  for( var i=0; i < hours.length; i++){
    this.customersPerHour.push(Math.floor(getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour)* this.avgCookies));
  }
};
//-------------------------------------------

SalmonStore.prototype.calcNumberOfCookiesPerHour = function(){

  var numberOfCookies;
  for(var i=0; i<hours.length; i++){
    numberOfCookies = Math.ceil(this.customersPerHour[i]);
    this.cookiesPerHour.push(numberOfCookies);
    this.dailyTotal = this.dailyTotal + numberOfCookies;
    hoursTotal[i]+=numberOfCookies;
  }
  hoursTotal[hoursTotal.length-1]+= this.dailyTotal;
};



//--------------------------------------------
SalmonStore.prototype.render = function(){

  var tr = document.createElement('tr');
  table.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = this.location;
  tr.appendChild(td);

  for (var x = 0; x < this.cookiesPerHour.length; x++){
    td = document.createElement('td');
    td.textContent = this.cookiesPerHour[x];
    tr.appendChild(td);

  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
};

//-------------------------------------------


new SalmonStore('Seatlle', 23, 65, 6.3);

new SalmonStore('Tokyo', 3, 24, 1.2);

new SalmonStore('Dubai', 11, 38, 3.7);

new SalmonStore('Paris', 20, 38, 2.3);

new SalmonStore('Lima', 2, 16, 4.6);

addHeader();

for (var i = 0; i < allLocations.length; i++) {
  allLocations[i].calcNumberOfCookiesPerHour();
  allLocations[i].render();
}
addFooter();
//----------------------------------------------

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//--------------------------------------------------