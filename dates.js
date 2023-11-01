var date=new Date();  
document.writeln("Today's day: "+date.getDate());  
document.writeln(day.getDay());
document.writeln("Year value : "+year.getUTCFullYear())
document.writeln(hour.getHours());  

var date=new Date("August 15, 1947 20:22:10");  
document.writeln(date.getMonth()+1)  

var milli =new Date("August 15, 1947 20:22:10:565");  
document.writeln(milli.getMilliseconds());  

var day=new Date("August 15, 1947 20:22:10");  
document.writeln(day.getDay())  

var hours=new Date("August 15, 1947 20:22:10");   
hours.setHours(10);  
document.writeln("Updated Hour : "+hours.getHours());  

var minutes=new Date("August 15, 1947 20:22:10");     
minutes.setMinutes(32);  
document.writeln("Updated Minute : "+minutes.getMinutes()); 

var seconds=new Date("August 15, 1947 20:22:10");     
seconds.setSeconds(15);  
document.writeln("Updated Second : "+seconds.getSeconds()); 

var date=new Date("August 15, 1947 20:22:10 GMT+0530 (India Standard Time) ");  
document.writeln(date.toDateString());  

var date=new Date(1947, 7, 15, 20, 22, 10);  
document.writeln(date.toDateString());

var date=new Date("August 15, 1947 20:22:10 GMT+0530 (India Standard Time) ");  
document.writeln(date.valueOf());  

var time=new Date(1947, 7, 15, 20, 22, 10);  
document.writeln(time.toTimeString());  

var date = new Date("August 15, 1947 20:22:10");  
date.setUTCDate(20);  
document.writeln("Updated day : "+date.getUTCDate())