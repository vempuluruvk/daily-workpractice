// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);

    // forgot to define variable a      
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}

try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }

  let result = 0;
try {
  result = add(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}

try{  
    var a=2;  
    if(a==2)  
    document.write("ok");  
    }  
    catch(Error){  
    document.write("Error found"+e.message);  
    }  
    finally{  
    document.write("Value of a is 2 ");  
    }  