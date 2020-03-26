var boxopen;

var mybox1 = document.getElementById( 'stakeholder-management-plan' );
mybox1.addEventListener( 'click', function ( event ) {
  
    var popupDiv = document.getElementById('first-popup');
    if (!boxopen) {
        popupDiv.className = 'popup popup-visible';
        boxopen = true;
    }
});

function closeBox1(){
    var popupDiv = document.getElementById('first-popup');
    popupDiv.className = 'popup popup-hidden';
    boxopen =false;
}


var mybox2 = document.getElementById( 'stakeholder-register' );
mybox2.addEventListener( 'click', function ( event ) {
    
    var popupDiv = document.getElementById('second-popup');
        if (!boxopen) {
            popupDiv.className = 'popup popup-visible';
            boxopen = true;
        }
});

function closeBox2(){
    var popupDiv = document.getElementById('second-popup');
    popupDiv.className = 'popup popup-hidden';
    boxopen = false;
}

var mybox3 = document.getElementById( 'communicate-with-stakeholders' );
mybox3.addEventListener( 'click', function ( event ) {
    var popupDiv = document.getElementById('third-popup');
        if (!boxopen) {
            popupDiv.className = 'popup popup-visible';
            boxopen = true;
        }
    
});

function closeBox3(){
    var popupDiv = document.getElementById('third-popup');
    popupDiv.className = 'popup popup-hidden';
    boxopen = false;
}