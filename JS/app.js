'use strict';

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

var divTable = document.getElementById('divTable');

var table = document.createElement('table');
divTable.appendChild(table);

var totalArray = [];

//-------------------------------------------

function SalmonStore(location , minCustomers , maxCustomers, avgCookie ){

this.location = location;
this.minCustomers = minCustomers;
this.maxCustomers = maxCustomers;
this.avgCookie = avgCookie;
this.custArray = [];
this.totalCookie = 0;
totalArray.push(this);

this.randomNumber();
};
//-------------------------------------------

SalmonStore.prototype.randomNumber = function(){
    for( var i=0; i < hours.length; i++){
       this.custArray.push(Math.floor(getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookie));
      }
}

//--------------------------------------------
function tableRender (){

    var trMaker = document.createElement('tr');
    table.appendChild(trMaker);

    var tdName = document.createElement('td');
    tdName.textContent = 'Table ';
    trMaker.appendChild(tdName);

    for (var x = 0; x < hours.length; x++){
    var tdMaker = document.createElement('td');
    tdMaker.textContent = hours[x] ;
    trMaker.appendChild(tdMaker);



    }
  }

  //-------------------------------------------

SalmonStore.prototype.countries = function(){

    var trMaker = document.createElement('tr');
    table.appendChild(trMaker);

    var tdName = document.createElement('td');
    tdName.textContent = this.location;
    trMaker.appendChild(tdName);

    for (var x = 0; x < hours.length; x++){
        var tdMaker = document.createElement('td');
        tdMaker.textContent = this.custArray[x] ;
        trMaker.appendChild(tdMaker);

    }

}


  //-------------------------------------------

  
  new SalmonStore('Seatlle', 23, 65, 6.3);
  new SalmonStore('Tokyo', 3, 24, 1.2);
  new SalmonStore('Dubai', 11, 38, 3.7);
  new SalmonStore('Paris', 20, 38, 2.3);
  new SalmonStore('Lima', 2, 16, 4.6);



  //-------------------------------------------

  tableRender();

//   stores();
  for (var index = 0; index < totalArray.length; index++) {

      totalArray[index].countries();
    }











  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }





















