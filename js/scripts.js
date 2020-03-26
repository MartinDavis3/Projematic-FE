
var mybox1 = document.getElementById( 'stakeholder-management-plan' );
mybox1.addEventListener( 'click', function ( event ) {
  
    var popupDiv = document.getElementById('first-popup');
    // var divClass = popupDiv.className;
    // if (divClass === 'popup popup-visible') {
        // popupDiv.className = 'popup popup-hidden';
    // } else {
        popupDiv.className = 'popup popup-visible';
    // }
});

function closeBox1(){
    var popupDiv = document.getElementById('first-popup');
    popupDiv.className = 'popup popup-hidden';
}


var mybox2 = document.getElementById( 'stakeholder-register' );
mybox2.addEventListener( 'click', function ( event ) {
    
    var popupDiv = document.getElementById('second-popup');
    // var divClass = popupDiv.className;
    // if (divClass === 'popup popup-visible') {
        // popupDiv.className = 'popup popup-hidden';
    // } else {
        popupDiv.className = 'popup popup-visible';
    // }
});

function closeBox2(){
    var popupDiv = document.getElementById('second-popup');
    popupDiv.className = 'popup popup-hidden';
}

var mybox3 = document.getElementById( 'communicate-with-stakeholders' );
mybox3.addEventListener( 'click', function ( event ) {
    var popupDiv = document.getElementById('third-popup');
    // var divClass = popupDiv.className;
    // if (divClass === 'popup popup-visible') {
        // popupDiv.className = 'popup popup-hidden';
    // } else {
        popupDiv.className = 'popup popup-visible';
    
};

function closeBox3(){
    var popupDiv = document.getElementById('third-popup');
    popupDiv.className = 'popup popup-hidden';
}