'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}







var cookiesSeattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  total:0,
  result: [],

  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },
    for(var i=0;i<=13;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
      
  }
},






var cookiesTokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },
  
    for(var i=0;i<=13;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
    
};






var cookiesDubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },
  
    for(var i=0;i<=13;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
     
};
cookiesDubai.htmlEdit();






var cookiesParis = {
  location: 'Paris',
  min: 20,
  max: 38,
  avgCookies:2.3,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },
 
    for(var i=0;i<=13;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
   
};
cookiesParis.htmlEdit();





var cookiesLima = {
  location: 'Lima',
  min: 2,
  max:  16,
  avgCookies: 4.6,
  total:0,
  result: [],
  randomCustNum: function(){
    return getRandomInt(this.min,this.max);
  },
  
    for(var i=0;i<=13;i++)
    { var liEl=document.createElement('li');
      this.result.push(Math.ceil(this.avgCookies*this.randomCustNum()));
  
};
cookiesLima.htmlEdit();
