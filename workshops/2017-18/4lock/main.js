var slider0=document.getElementById("slider0");
var slider1=document.getElementById("slider1");
var slider2=document.getElementById("slider2");
var slider3=document.getElementById("slider3");

function check1(){
    if(slider0.checked==true && slider1.checked==true && slider2.checked==true) {
        setTimeout(function(){
            window.location.href = 'page1.html';
        }, 600);
    }
}

function check2(){
    if(slider0.checked==false && slider1.checked==true && slider2.checked==true && slider3.checked==false) {
        setTimeout(function(){
            window.location.href = 'page2.html';
        }, 600);
    }
}

function check3(){
  setTimeout(function(){
    window.location.href = 'lastPage.html';
  }, 600);
}
