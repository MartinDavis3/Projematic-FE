const screenWidthBreakpoint = 768

// This function for expanding grid adapted from: w3schools How TO - Expanding Grid
// https://www.w3schools.com/howto/howto_js_expanding_grid.asp
// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(sectionName, tabName) {
  const secNames = ["preproject-section", "initiation-section", "planning-section", "execution-section", "closing-section"]
  const secWidths = ["show-narrow", "show-narrow", "show-wide", "show-medium", "show-narrow"]
  var winWidth = window.innerWidth;
  var fcSection, fcTab, oldClass, newClass, clickTab, fcArticle;
  fcSection = document.getElementsByClassName("flowchart-section");
  fcTab = document.getElementsByClassName("flowchart-tab");
  if ( winWidth < screenWidthBreakpoint ) {
    for ( let i = 0; i < fcTab.length; i++) {
      // NOTE: Normally would not use inline styles
      // However, using classes like:
      // oldClass = fcSection[i].className
      // newClass = oldClass.replace('visible-section', 'hidden-section')
      // fcSection[i].className = newClass
      // does not work because section:nth-child(n) in CSS,
      // used to set grid, beats class selector
      fcSection[i].style.display = "none"
      oldClass = fcTab[i].className
      newClass = oldClass.replace('fc-tab-on', 'fc-tab-off')
      fcTab[i].className = newClass
    }
    for ( let i = 0; i < 5; i++) {
      if ( sectionName === secNames[i] ) {
        // Comment as above about inline styles
        document.getElementById(sectionName).style.display = "grid";
        fcArticle = document.getElementById("full-flowchart")
        fcArticle.className = secWidths[i]
      }
    }
    clickTab = document.getElementById(tabName);
    oldClass=clickTab.className
    newClass = oldClass.replace('fc-tab-off', 'fc-tab-on')
    clickTab.className = newClass
    // document.getElementById(sectionName).className = 'flowchart-section visible-section'
  }
}

// Change button appearance at screen width breakpoint
var lastWinWidth

function handleResize() {
  var winWidth = window.innerWidth;
  var fcSection, fcTab;
  fcSection = document.getElementsByClassName("flowchart-section");
  fcTab = document.getElementsByClassName("flowchart-tab");
  // If changing to larger screen
  if ( lastWinWidth < screenWidthBreakpoint && winWidth >= screenWidthBreakpoint ) {
    for ( let i = 0; i < fcSection.length; i++) {
      fcSection[i].style.display = "grid";
      fcTab[i].style.borderBottomStyle = "solid";
      fcTab[i].style.backgroundColor = "#fcf7f8";
    }  
    document.getElementById("full-flowchart").style.gridTemplateColumns = "9.5vw 9.5vw 40vw 30.5vw 9.5vw"
  // If changing to a smaller screen
  } else if ( lastWinWidth >= screenWidthBreakpoint && winWidth < screenWidthBreakpoint ) {
    openTab("preproject-section", "preproject-tab")
  }
  lastWinWidth=winWidth
}