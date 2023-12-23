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

const myser = setTimeout(load,5000)

/// login system
function logoin(){
  window.location.href="https://www.account.nahidhk.info/"

}
