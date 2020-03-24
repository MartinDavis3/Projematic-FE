const screenWidthBreakpoint = 768

// This function for expanding grid adapted from: w3schools How TO - Expanding Grid
// https://www.w3schools.com/howto/howto_js_expanding_grid.asp
// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(sectionName, tabName) {
  const secNames = ["preproject-section", "initiation-section", "planning-section", "execution-section", "closing-section"]
  const secWidths = ["23.5vw", "23.5vw", "99vw", "75.5vw", "23.5vw"]
  var winWidth = window.innerWidth;
  var fcSection, fcTab;
  fcSection = document.getElementsByClassName("flowchart-section");
  fcTab = document.getElementsByClassName("flowchart-tab");
  if ( winWidth < screenWidthBreakpoint ) {
    for ( let i = 0; i < fcSection.length; i++) {
      fcSection[i].style.display = "none";
      fcTab[i].style.borderBottomStyle = "solid";
      fcTab[i].style.borderBottomWidth = "1px";
        fcTab[i].style.backgroundColor = "#c0c6d0";
    }
    for ( let i = 0; i < 5; i++) {
      if ( sectionName === secNames[i] ) {
        document.getElementById("full-flowchart").style.gridTemplateColumns = secWidths[i]
      }
    }
    document.getElementById(sectionName).style.display = "grid";
    document.getElementById(tabName).style.borderBottomStyle = "none";
    document.getElementById(tabName).style.backgroundColor = "#fcf7f8";
  }
}

// Change button appearance at screen width breakpoint
var lastWinWidth

function handleResize() {
  var winWidth = window.innerWidth;
  var fcSection, fcTab;
  fcSection = document.getElementsByClassName("flowchart-section");
  fcTab = document.getElementsByClassName("flowchart-tab");
  if ( lastWinWidth < screenWidthBreakpoint && winWidth >= screenWidthBreakpoint ) {
    for ( let i = 0; i < fcSection.length; i++) {
      fcSection[i].style.display = "grid";
      fcTab[i].style.borderBottomStyle = "solid";
      fcTab[i].style.backgroundColor = "#fcf7f8";
    }  
    document.getElementById("full-flowchart").style.gridTemplateColumns = "9.5vw 9.5vw 40vw 30.5vw 9.5vw"
  } else if ( lastWinWidth >= screenWidthBreakpoint && winWidth < screenWidthBreakpoint ) {
    openTab("preproject-section", "preproject-tab")
  }
  lastWinWidth=winWidth
}