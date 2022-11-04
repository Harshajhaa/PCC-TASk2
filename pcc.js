var times = document.getElementById('time');
var days = document.getElementById('day');
var month = document.getElementById('month');
var dates = document.getElementById('date');
var year = document.getElementById('year');

var months=["January","February","March","April","May","June","July","August","september","October","November","December"];
var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var mon = d.getMonth();
  var dnum = d.getDate();
  var yr = d.getFullYear();
  var day = d.getDay();
  days.textContent = week[day];
  month.textContent = months[mon];
  dates.textContent = ("0" + dnum).substr(-2);
  year.textContent = ("0" + yr).substr(-4);
  times.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

let data=1;
document.getElementById("counter").innerText=data; 
function incrementValue(){
  data++;
  document.getElementById("counter").innerText=data;
  if(data%2===0){
    document.getElementById("mainn").style.color = "green";
  }
  else{
    document.getElementById("mainn").style.color = "red";
  }
}

setInterval(time, 1000);