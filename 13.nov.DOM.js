const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});


form.addEventListener("awesome", (e) => console.log(e.detail.text()));


textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));


var buttonEl = document.getElementById("clicker");
var onButtonClick = function() {
    console.log("Oh golly gosh, you clicked me");
};
buttonEl.addEventListener("click", onButtonClick);


var faceEl = document.getElementById("face");
var onFaceClick = function(e) {
    console.log("You clicked " + e.clientX + " , " + e.clientY);
};
faceEl.addEventListener("click", onFaceClick);

// removing 
faceEl.removeEventListener("click", onFaceClick);



function clickevent()  
    {  
        document.write("This is JavaTpoint");  
    }  


    function focusevent()  
    {  
        document.getElementById("input1").style.background=" aqua";  
    }  


    function keydownevent()  
    {  
        document.getElementById("input1");  
        alert("Pressed a key");  
    }  


    function sendEmail() { 
        Email.send({ 
          Host: "smtp.gmail.com", 
          Username: "sender@email_address.com", 
          Password: "Enter your password", 
          To: 'receiver@email_address.com', 
          From: "sender@email_address.com", 
          Subject: "Sending Email using javascript", 
          Body: "Well that was easy!!", 
        }) 
          .then(function (message) { 
            alert("mail sent successfully") 
          }); 
      } 

      const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

      