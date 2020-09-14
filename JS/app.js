'use strict';
// function Dnew(location,min,max,avgCookies,total,result){
// this.location= location;
// this.min=min;
// this.max=max;
// this.avgCookies=avgCookies;
// this.total=total;
// this.result=result;

//--------------------------------------------

'use strict';

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var dStore1 = {

  location : 'Seatlle',
  minCustomers : 23,
  maxCustomers : 65,
  custArray: [],
  totalCookie: 0,
  avgCookie : 6.3,



  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      
      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('divDoc');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
dStore1.randomCustm();
dStore1.rendre();




//--------------------------------------------------


var dStore2 = {

  location : 'Tokyo',
  minCustomers : 3,
  maxCustomers : 24,
  custArray: [],
  totalCookie: 0,
  avgCookie : 1.2,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('divDoc');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
dStore2.randomCustm();
dStore2.rendre();



//------------------------------------------------------

var dStore3 = {

  location : 'Dubai',
  minCustomers : 11,
  maxCustomers : 38,
  totalCookie: 0,
  custArray: [],
  avgCookie : 3.7,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('divDoc');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
dStore3.randomCustm();
dStore3.rendre();


//-----------------------------------------------------

var dStore4 = {

  location : 'Paris',
  minCustomers : 20,
  maxCustomers : 38,
  totalCookie: 0,
  custArray: [],
  avgCookie : 2.3,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  rendre:function(){
    var divx = document.getElementById('divDoc');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);

    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
dStore4.randomCustm();
dStore4.rendre();




//---------------------------------------------------


var dStore5 = {

  location : 'Lima',
  minCustomers : 2,
  maxCustomers : 16,
  custArray: [],
  totalCookie: 0,
  avgCookie : 4.6,

  randomCustm : function(){
    for( var i=0; i < hours.length; i++){

      this.custArray.push( getRandomInt(this.minCustomers, this.maxCustomers));
    }
  },
  render5:function(){
    var divx = document.getElementById('divDoc');

    var seatlleH2 = document.createElement('h2');
    seatlleH2.textContent=this.location;
    divx.appendChild(seatlleH2);

    var ul1 = document.createElement('ul');
    divx.appendChild(ul1);


    for (var x = 0; x < hours.length; x++){
      this.totalCookie = this.totalCookie + this.custArray[x];
      var lix = document.createElement('li');
      lix.textContent = hours[x] + ' ' + this.custArray[x] +' cookies';
      ul1.appendChild(lix);



    }
    var liTotal = document.createElement('li');
    liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
    ul1.appendChild(liTotal);
  }
};
dStore5.randomCustm();
dStore5.render();