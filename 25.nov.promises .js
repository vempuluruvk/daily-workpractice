Promise.resolve('some')
  .then(function(string) { 
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'thing';
        resolve(string);
      }, 1);
    });
  })
  .then(function(string) { 
    console.log(string); 
  });

  var add = function(x, y) {
    return new Promise((resolve,reject) => {
      var sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not add the two values!"));
      }
    });
  };
  
  var subtract = function(x, y) {
    return new Promise((resolve, reject) => {
      var sum = x - y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not subtract the two values!"));
      }
    });
  };
  
  add(2,2)
    .then((added) => {
      return subtract(added, 3);
    })
    .then((subtracted) => {
      return add(subtracted, 5);
    })
    .then((added) => {
      
      return added * 2;    
    })
    .then((result) => {
      console.log("My result is ", result);
    })
    .catch((err) => {
      console.log(err);
    });




    function doSomething() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("Did something");
            resolve("https://example.com/");
          }, 200);
        });
      }

      let passexam = true;

        let res = new Promise(function (resolve, reject) {
            if (passexam) {
                resolve("Dad gifted the new mobile.");
            } else {
                reject("Dad has not gifted the mobile.");
            }
        });


        
        function doPromise(passexam) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => {
                    if (passexam) {
                        resolve("Dad gifted the new mobile.");
                    } else {
                        reject("Dad has not gifted the mobile.");
                   }
                }, 5 * 1000);
            });
        }
        let passexam = doPromise(true);
        passexam.then(
            success => console.log(success),
            err => console.log(err)
        );


        const res = new Promise((resolve, reject) => {
            const passexam = false;
            setTimeout(() => {
                if (passexam) {
                    resolve("Dad gifted the new mobile.");
                } else {
                    reject("Dad has not gifted the mobile.");
                }
            }, 5 * 1000)
        });
        res.then(result => console.log(result),
            err => alert(err));
      
            
