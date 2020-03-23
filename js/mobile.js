// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName, tabId) {
  var winWidth = window.innerWidth;
  var i, x, y;
  x = document.getElementsByClassName("containerTab");
  y = document.getElementsByClassName("column");
  if ( winWidth < 768 ) {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.borderBottomStyle = "solid";
      y[i].style.backgroundColor = "lightgray";
    }
    document.getElementById(tabName).style.display = "grid";
    document.getElementById(tabId).style.borderBottomStyle = "none";
    document.getElementById(tabId).style.backgroundColor = "white";
  }
}

var lastWinWidth

function handleResize() {
  var winWidth = window.innerWidth;
  var i, x, y;
  x = document.getElementsByClassName("containerTab");
  y = document.getElementsByClassName("column");
  // console.log("lastWinWidth: " + lastWinWidth)
  // console.log("currWinWidth: " + winWidth)
  if ( lastWinWidth < 768 && winWidth >= 768) {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "grid";
      y[i].style.borderBottomStyle = "solid";
      y[i].style.backgroundColor = "white";
    }  
  } else if ( lastWinWidth >= 768 && winWidth < 768 ) {
    openTab("b1", "t1")
  }
  lastWinWidth=winWidth
}