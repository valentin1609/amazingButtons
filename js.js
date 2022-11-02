var buttonsMain = document.getElementById('buttons-main');
var cardsMain = document.getElementById('cards-main');
var animationsMain = document.getElementById('animations-main'); 
    buttonsMain.style.display = 'block';
    cardsMain.style.display = 'none';
    animationsMain.style.display = 'none';


var abuttons = document.getElementsByClassName('asideItem')[0];
var acards = document.getElementsByClassName('asideItem')[1];
var aanimations = document.getElementsByClassName('asideItem')[2];

var mbuttons = document.getElementsByClassName('asideItemMenu')[0];
var mcards = document.getElementsByClassName('asideItemMenu')[1];
var manimations = document.getElementsByClassName('asideItemMenu')[2];

    
function buttons(){
    buttonsMain.style.display = 'block';
    cardsMain.style.display = 'none';
    animationsMain.style.display = 'none';

    abuttons.id = "selected"
    acards.id = "notSelected"
    aanimations.id = "notSelected"

    mbuttons.id = "selectedMenu"
    mcards.id = "notSelectedMenu"
    manimations.id = "notSelectedMenu"
    }

function cards(){
    buttonsMain.style.display = 'none';
    cardsMain.style.display = 'block';
    animationsMain.style.display = 'none';

    abuttons.id = "notSelected"
    acards.id = "selected"
    aanimations.id = "notSelected"

    mbuttons.id = "notSelectedMenu"
    mcards.id = "selectedMenu"
    manimations.id = "notSelectedMenu"
    }

function animations(){
    buttonsMain.style.display = 'none';
    cardsMain.style.display = 'none';
    animationsMain.style.display = 'block';

    abuttons.id = "notSelected"
    acards.id = "notSelected"
    aanimations.id = "selected"

    mbuttons.id = "notSelectedMenu"
    mcards.id = "notSelectedMenu"
    manimations.id = "selectedMenu"
    }


//menu
var line1 = document.getElementsByClassName("line")[0]
var line2 = document.getElementsByClassName("line")[1]
var line3 = document.getElementsByClassName("line")[2] 
var asideMenu = document.getElementById("asideMenu")

function onmenu() {
    if (line1.id === "line1") {
        line1.id = "line1x";
        line2.id = "line2x";
        line3.id = "line3x";
        asideMenu.style.display = 'block';
        } 
    else 
        {line1.id = "line1";
         line2.id = "line2"
         line3.id = "line3"
         asideMenu.style.display = 'none';
        };
    
}