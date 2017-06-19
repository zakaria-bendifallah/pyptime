$(document).ready(function(){
   $("tr:odd").addClass("color-odd");
   $("tr:even").addClass("color-even");

   var ctime = new Date();
   var hour = ctime.getHours();
   var minute = ctime.getMinutes();
   var dhuhr = new String($("#dhuhr_hour").text());
   var parts = dhuhr.split(':')
   if(parts == null){
     alert("cannot split");
   }else{
       //alert("dhurs is at :" + parts[0] + "hours and" parts[1] + " minutes");
       //alert("dhuhr is at :" + dhuhr);
   }
 
   //$("td.dhuhr").addClass("color-focus");
});

$(document).ready(function(){
  var d = new Date();
  var year = d.getFullYear();
  var dayMonth = d.getDate();
  var day =  d.getDay();
  var month = d.getMonth();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var aDays = ["الاحد","الإثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"];
  var aMonths = [];
  $("#current-date").text("[ "+ hour + ":" + minute + "  " + dayMonth + " " + aDays[day] + " ]");
});


$(document).ready(function(){
  ("#asr").css("background","#fb8400");
});