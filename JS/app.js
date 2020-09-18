
'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// -----------------------------------------------
var container = document.getElementById('divTable');
var tableEle = document.createElement('table');
container.appendChild(tableEle);
var dStore = [];

// -----------------------------------------------
function Shop(name, minCust, maxCust, avgCoookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCoookies = avgCoookies;
  this.cookiesArr = [];
  this.cookiesTotal = 0;
  dStore.push(this);
  this.cookies();
}
Shop.prototype.cookies = function () {
  for (var i = 0; i < hours.length; i++) {
    var calcuPerHour = Math.floor(getRandomNum(this.maxCust, this.minCust) * this.avgCoookies);
    this.cookiesArr.push(calcuPerHour);
    this.cookiesTotal += this.cookiesArr[i];
  }
};
// -----------------------------------------------
function header() {
  var trX = document.createElement('tr');
  tableEle.appendChild(trX);
  var thSpace = document.createElement('th');
  thSpace.textContent = 'Table';
  trX.appendChild(thSpace);
  for (var i = 0; i < hours.length; i++) {
    var thX = document.createElement('th');
    thX.textContent = `${hours[i]}`;
    trX.appendChild(thX);
  }
  var thTotal = document.createElement('th');
  thTotal.textContent = 'Total';
  trX.appendChild(thTotal);
}
// -----------------------------------------------
Shop.prototype.render = function(){
  var trX =document.createElement('tr');
  tableEle.appendChild(trX);
  var tdX = document.createElement('td');
  trX.appendChild(tdX);
  tdX.textContent = this.name;
  for (var m=0; m<hours.length; m++){
    tdX = document.createElement('td');
    trX.appendChild(tdX);
    tdX.textContent = this.cookiesArr[m];
  }
  var tdCookieTotal = document.createElement('td');
  trX.appendChild(tdCookieTotal);
  tdCookieTotal.textContent = this.cookiesTotal;
};
// -----------------------------------------------
new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);
// -----------------------------------------------
function footer() {
  var trX = document.createElement('tr');
  tableEle.appendChild(trX);
  var tdX = document.createElement('td');
  trX.appendChild(tdX);
  tdX.textContent = 'Total';
  var totalHours;
  var finalTotal = 0;
  for (var h = 0; h<hours.length;h++){
    totalHours = 0;
    for(var x = 0; x < dStore.length; x++){
      totalHours += dStore[x].cookiesArr[h];
    }
    var tdHour = document.createElement('td');
    tdHour.textContent = totalHours;
    finalTotal += totalHours;
    trX.appendChild(tdHour);
  }
  var tdFinalTotal = document.createElement('td');
  tdFinalTotal.textContent = finalTotal;
  trX.appendChild(tdFinalTotal);
}
header();
for (var i = 0; i <dStore.length;i++){
  dStore[i].render();
}
footer();
// -----------------------------------------------

var locationForm = document.getElementById('OrderX');
locationForm.addEventListener('submit', function (event){
  event.preventDefault();
  var locationInput = event.target.Name.value;
  var minInput = event.target.MinC.value;
  var maxInput = event.target.MaxC.value;
  var avgCoookiesInput = event.target.Avg.value;
  var newStore = new Shop(locationInput, minInput, maxInput, avgCoookiesInput);
  tableEle.deleteRow(tableEle.rows.length - 1);

  newStore.render();
  footer();
});
// -----------------------------------------------
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// -----------------------------------------------

