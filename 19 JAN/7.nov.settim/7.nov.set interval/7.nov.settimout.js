var myVar = setInterval(myTimer, 1000); 
      
    function myTimer() { 
        document.getElementById("GFG") 
        .innerHTML +="<p>Hi</p>"; 
    } 

    setTimeout(function () {
        something();
    }, 1000); 

    function doStuff() {
        alert("run your code here when time interval is reached");
        }
        var myTimer = setInterval(doStuff, 5000);

        function welcome() {
            console.log('gjvfycj');
          }
          setTimeout(welcome, 1000);

          function welcome(message, siteName) {
            console.log(message + ' to ' + siteName);
          }
          setTimeout(welcome, 1000, "We", "jbvhc");


   // repeat with the interval of 2 seconds
let intervalTimerId = setInterval(() => console.log('start'), 2000); 
// after 5 seconds stop
setTimeout(() => {
  clearInterval(intervalTimerId);
  console.log('stop');
}, 5000);

let delay = 3000;
let intervalTimerId = setTimeout(function request() {
  //send request
  if (the request failed as the server was overloaded) {
    delay *= 2;
  }
  intervalTimerId = setTimeout(request, delay);
}, delay);


let i = 1;
setInterval(function () {
  f(i++);
}, 1000);

let i = 1;
setTimeout(function run() {
  f(i++);
  setTimeout(run, 100);
}, 100);

setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);

  setTimeout(function () {
    myArray.myMethod();
  }, 2.0 * 1000); // prints "zero,one,two" after 2 seconds
  setTimeout(function () {
    myArray.myMethod("1");
  }, 2.5 * 1000); // prints "one" after 2.5 seconds

