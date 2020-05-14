const popupTargetId = [
    'stakeholder-management-plan',
    'stakeholder-register',
    'communicate-with-stakeholders',
    'project-status-report'
];

const popupId = [
    'first-popup',
    'second-popup',
    'third-popup',
    'fourth-popup',
    'splash-screen' //The splash-screen is set to visible in html, so shows on startup and then can only be closed.
];

var boxopen = false;

for (let i = 0; i < popupTargetId.length; i++) {
    let targetBox = document.getElementById( popupTargetId[i] );
    targetBox.addEventListener( 'click', function ( event ) {
    
        let popupDiv = document.getElementById(popupId[i]);
        if (!boxopen) {
            popupDiv.className = 'popup popup-visible';
            boxopen = true;
        }
    });
}

function closeBox(popupToClose){
    var popupDiv = document.getElementById(popupToClose);
    popupDiv.className = 'popup popup-hidden';
    boxopen =false;
}

