
'use strict';

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
var arr=[];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function Dnew(location,min,max,avgCookies){
this.location= location;
this.minCustomers=min;
this.maxCustomers=max;
this.avgCookie=avgCookies;
this.cookiezArray=[];
this.totalCookie=0;
arr.push(this);
}

Dnew.prototype.randomCustm=function() {
  for( var i=0; i < hours.length; i++){
    var a=Math.floor( getRandomInt(this.minCustomers, this.maxCustomers)*this.avgCookie);
    this.cookiezArray.push (a);
    console.log(a);
  }
};

Dnew.prototype.rendre=function(){
var divx = document.getElementById('divDoc');

var seatlleH2 = document.createElement('h2');
seatlleH2.textContent=this.location;
divx.appendChild(seatlleH2);


var ul1 = document.createElement('ul');
divx.appendChild(ul1);


for (var x = 0; x < hours.length; x++){
  this.totalCookie+=this.cookiezArray[x];
  var lix = document.createElement('li');
  lix.textContent = hours[x] + ' ' + this.cookiezArray[x]+' cookies';
  ul1.appendChild(lix);

}
var liTotal = document.createElement('li');
liTotal.textContent = ' Total: '+ this.totalCookie + ' cookies';
ul1.appendChild(liTotal);
}

new Dnew('Lima',2,16,4.6);
new Dnew('Lima',2,16,4.6);
new Dnew('Lima',2,16,4.6);
new Dnew('Lima',2,16,4.6);
new Dnew('Lima',2,16,4.6);

for(var a=0;a<arr.length;a++){
arr[a].randomCustm();
arr[a].rendre();
}

// //--------------------------------------------------

