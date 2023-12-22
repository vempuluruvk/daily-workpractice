try{  
    var a=2;  
    if(a==2)  
    console.log("ok");  
    }  
    catch(Error){  
    console.log("Error found"+e.message);  
    }  
    finally{  
    console.log("Value of a is 2 ");  
    }  
    

    function pp() {
        var c = parseInt(document.all.t1.value)
        var d = parseInt(document.all.t2.value)
        var e = 0
        try {
            if (d == 0) {
                throw "Divisor is Zero"
            }
            if (c == 0) {
                throw "To be divided is Zero"
            }
        }
        catch (error) {
            alert(error)
        }
    }

    function p() {
        var c = parseInt(document.all.t1.value)
        try {
            switch (c) {
                case 1:
                    throw "Sunday"
                    break
                case 2:
                    throw "Monday"
                    break
                case 3:
                    throw "Tuesday"
                    break
                case 4:
                    throw "Wednesday"
                    break
                case 5:
                    throw "Thursday"
                    break
                case 6:
                    throw "Friday"
                    break
                case 7:
                    throw "Saturday"
                    break
                default:
                    throw "The real error"
            }
        }
        catch (error) {
            alert(error)
        }
    }

    
    
    try {
        var a = 10;
        if (a == 10)
            document.write("ok");
    }
    catch (Error) {
        document.write("Error found" + e.message);
    }
    finally {
        document.write("Value of a is 10 ");
    }


    function myFunc(x,y) {

        try {
           if ( y == 0 ) { 
               throw( "Divide by zero error." ); 
           } else {
               var c = x / y;
               console.log(c); 
           }
       }
       catch ( e ) { 
           console.log("Error: " + e ); 
       }
   }

   
   function myFunction() {
    const j = 70;
    try {
        allert("The value of j is : " + j);
    } catch (error) {
        alert("Error: " + error.message);
    }
}
           

function myFunction() {
    const j = 70;
    try {
        alert("The value of j is : " + j);
    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        alert("Finally: Finally gets executed")
    }
}