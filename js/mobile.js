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
      // NOTE: Normally would not use inline styles.
      // However, using classes like:
      // oldClass = fcSection[i].className
      // newClass = oldClass.replace('visible-section', 'hidden-section')
      // fcSection[i].className = newClass
      // does not work because section:nth-child(n) in CSS,
      // used to set grid, appears to beat class selector (specificity).
      // Could probably add a div below each section to hold grid, but this is a major change to
      // the grid structure and is not the current priority (25-Mar-2020).
      fcSection[i].style.display = "none";
      oldClass = fcTab[i].className;
      newClass = oldClass.replace('fc-tab-on', 'fc-tab-off');
      fcTab[i].className = newClass;
    }
    for ( let i = 0; i < 5; i++) {
      if ( sectionName === secNames[i] ) {
        // Comment as above about inline styles
        document.getElementById(sectionName).style.display = "grid";
        fcArticle = document.getElementById("full-flowchart");
        fcArticle.className = secWidths[i];
      }
    }
    clickTab = document.getElementById(tabName);
    oldClass=clickTab.className;
    newClass = oldClass.replace('fc-tab-off', 'fc-tab-on');
    clickTab.className = newClass;
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
      oldClass = fcTab[i].className;
      newClass = oldClass.replace('fc-tab-on', 'fc-tab-off');
      fcTab[i].className = newClass;
      fcSection[i].style.display = "grid";
    }  
    document.getElementById("full-flowchart").className = "show-all";
  // If changing to a smaller screen
  } else if ( lastWinWidth >= screenWidthBreakpoint && winWidth < screenWidthBreakpoint ) {
    openTab("preproject-section", "preproject-tab");
  }
  lastWinWidth=winWidth;
}

function setForScreenSize() {
  var winWidth = window.innerWidth;
  var fcSection, fcTab;
  console.log("in routine setForScreenSize");
  fcSection = document.getElementsByClassName("flowchart-section");
  fcTab = document.getElementsByClassName("flowchart-tab");
  // If large screen
  if ( winWidth >= screenWidthBreakpoint ) {
    for ( let i = 0; i < fcSection.length; i++) {
      oldClass = fcTab[i].className;
      newClass = oldClass.replace('fc-tab-on', 'fc-tab-off');
      fcTab[i].className = newClass;
      fcSection[i].style.display = "grid";
    }  
    document.getElementById("full-flowchart").className = "show-all";
  // If small screen
  } else if ( winWidth < screenWidthBreakpoint ) {
    openTab("preproject-section", "preproject-tab");
  }
  lastWinWidth=winWidth;
}