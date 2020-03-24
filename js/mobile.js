const screenWidthBreakpoint = 768

// This function for expanding grid adapted from: w3schools How TO - Expanding Grid
// https://www.w3schools.com/howto/howto_js_expanding_grid.asp
// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName, tabId) {
  var winWidth = window.innerWidth;
  var i, x, y;
  x = document.getElementsByClassName("flowchart-section");
  y = document.getElementsByClassName("flowchart-tab");
  if ( winWidth < screenWidthBreakpoint ) {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.borderBottomStyle = "solid";
      y[i].style.backgroundColor = "#c0c6d0";
    }
    document.getElementById(tabName).style.display = "grid";
    document.getElementById(tabId).style.borderBottomStyle = "none";
    document.getElementById(tabId).style.backgroundColor = "#fcf7f8";
  }
}

// Change button appearance at screen width breakpoint
var lastWinWidth

function handleResize() {
  var winWidth = window.innerWidth;
  var i, x, y;
  x = document.getElementsByClassName("flowchart-section");
  y = document.getElementsByClassName("flowchart-tab");
  if ( lastWinWidth < screenWidthBreakpoint && winWidth >= screenWidthBreakpoint ) {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "grid";
      y[i].style.borderBottomStyle = "solid";
      y[i].style.backgroundColor = "#fcf7f8";
    }  
  } else if ( lastWinWidth >= screenWidthBreakpoint && winWidth < screenWidthBreakpoint ) {
    openTab("preproject-section", "preproject-tab")
  }
  lastWinWidth=winWidth
}