console.log('Hello World!');
!function(e,t){"use strict";
}
(0); 

/// menu bar function
function menux(){
  document.getElementById("top-nav").style=`  height: 100vh;
    width: 100%;
    animation: b3 0.2s;
    top:0;
    right:0;
`
document.getElementById("close").style.display="block";

}

function cko(){
   document.getElementById("top-nav").style = `  height: 0;
      width: 0;
      animation: d3 0.2s;
    
  `
   document.getElementById("close").style.display = "none";
}

function load(){
  document.getElementById("load").style.display="none";
  document.getElementById("box").style.display="block";
}

const myser = setTimeout(load,2000)

/// login system
function logoin(){
  window.location.href="https://www.account.nahidhk.info/"

}


function eBox() {
  var loca = localStorage.getItem("display");
  if (loca !== "none") {
    document.getElementById("e-box").style.display = "block";
    navigator.vibrate(1000);
  }
}

setTimeout(eBox, 3000);

  function setok(){
 var emailio = document.getElementById("email").value;
   
  localStorage.setItem("display", "none");
  // email data save 
  localStorage.setItem("email", emailio);
  
     event.preventDefault();
document.getElementById("emain").style.display="block";
  document.getElementById("e-box").style.display = "none";
  document.getElementById("email1").value=emailio;
  alert("your Mail is :" + emailio + " please confirm the mail!");
}
