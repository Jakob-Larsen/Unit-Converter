var lengthInUnit, LengtOutUnit;



function pickConvertion(convertion) {
    var i, tabs;

    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";  
    }

    buttons = document.getElementsByClassName("tabbutton");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('style', 'border-bottom: 0px;');
    }

    // Use querySelector to select a single element
    const button = document.querySelector(`.${convertion}`);
    if (button) {
        button.setAttribute('style', 'border-bottom: 2px solid;');
    }

    const element = document.getElementById(convertion);
    if (element) {
        element.style.display = "block";
    }
}

function updateLengthUnit(inOrOut, unit){
    if(inOrOut){
        lengthInUnit = unit;
    }
    else{
        lengthOutUnit = unit;
    }
}

function convertLength(){
    var lengthInput = document.getElementById("lengthInput").value;
    var lengthMeter;
    var lengthOutput;
    switch(LengtInUnit){
        case 'mm':
            break;
        case 'cm':
            break;
        case 'dm':
            break;
        case 'm':
            break;
        case 'dam':
            break;
        case 'hm':
            break;
        case 'km':
            break;
        case 'in':
            break;
        case 'ft':
            break;
        case 'yd':
            break;
        case 'ml':
            break;
        
    }
        switch(LengtOutUnit){
        case 'mm':
            break;
        case 'cm':
            break;
        case 'dm':
            break;
        case 'm':
            break;
        case 'dam':
            break;
        case 'hm':
            break;
        case 'km':
            break;
        case 'in':
            break;
        case 'ft':
            break;
        case 'yd':
            break;
        case 'ml':
            break;
        
    }

}
