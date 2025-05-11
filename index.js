// Variables
var lengthInUnit='mm', lengthOutUnit = 'mm';
var lengthOutputElement = document.querySelector('p#outputLength');

var tempInUnit='c', tempOutUnit = 'c';
var tempOutputElement = document.querySelector('p#outputTemp');

var massInUnit='mg', massOutUnit = 'mg';
var massOutputElement = document.querySelector('p#outputMass');

// Length conversion
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

function updateLengthUnitIn(unit){
    lengthInUnit = unit;
    if(lengthInput != null){
        convertLength()
    } 
}

function updateLengthUnitOut(unit){
    lengthOutUnit = unit;
    if(lengthInput != null){
        convertLength()
    }

}

function convertLength(){
    var lengthInput = parseFloat(document.getElementById("lengthInput").value);
    var lengthMeter;
    var lengthOutput;

    switch(lengthInUnit){
        case 'mm':
            lengthMeter = lengthInput / 1000;
            break;
        case 'cm':
            lengthMeter = lengthInput / 100;
            break;
        case 'dm':
            lengthMeter = lengthInput / 10;
            break;
        case 'm':
            lengthMeter = lengthInput;
            break;
        case 'dam':
            lengthMeter = lengthInput * 10;
            break;
        case 'hm':
            lengthMeter = lengthInput * 100;
            break;
        case 'km':
            lengthMeter = lengthInput * 1000;
            break;
        case 'in':
            lengthMeter = lengthInput * 0.0254;
            break;
        case 'ft':
            lengthMeter = lengthInput * 0.3048;
            break;
        case 'yd':
            lengthMeter = lengthInput * 0.9144;
            break;
        case 'ml':
            lengthMeter = lengthInput * 1609.34;
            break;
        
    }

    switch(lengthOutUnit){
        case 'mm':
            lengthOutput = lengthMeter * 1000;
            break;
        case 'cm':
            lengthOutput = lengthMeter * 100;
            break;
        case 'dm':
            lengthOutput = lengthMeter * 10;
            break;
        case 'm':
            lengthOutput = lengthMeter;
            break;
        case 'dam':
            lengthOutput = lengthMeter / 10;
            break;
        case 'hm':
            lengthOutput = lengthMeter / 100;
            break;
        case 'km':
            lengthOutput = lengthMeter / 1000;
            break;
        case 'in':
            lengthOutput = lengthMeter / 0.0254;
            break;
        case 'ft':
            lengthOutput = lengthMeter / 0.3048;
            break;
        case 'yd':
            lengthOutput = lengthMeter / 0.9144;
            break;
        case 'ml':
            lengthOutput = lengthMeter / 1609.34;
            break;
        
    }

    if(lengthOutput == 'NaN'){
        lengthOutputElement.innerHTML = 'Please enter a valid number';
    }
    else{
        lengthOutputElement.innerHTML = lengthOutput + " " + lengthOutUnit;
    }
}

// Temperature conversion
function updateTempUnitIn(unit){
    tempInUnit = unit;
    if(tempInput != null){
        convertTemp()
    }
}

function updateTempUnitOut(unit){
    tempOutUnit = unit;

    if(tempInput != null){
        convertTemp()
    }
}

function convertTemp(){
    var tempInput = parseFloat(document.getElementById("tempInput").value);
    var tempCelcius;
    var tempOutput;

    switch(tempInUnit){
        case 'c':
            console.log(tempInput)
            tempCelcius = tempInput;
            break;
        case 'f':
            tempCelcius = (tempInput - 32) / 1.8;
            break;
        case 'k':
            tempCelcius = tempInput - 273.15;
            break;
    }

    switch(tempOutUnit){
        case 'c':
            tempOutput = tempCelcius;
            break;
        case 'f':
            tempOutput = (tempCelcius * 1.8) + 32;
            break;
        case 'k':
            tempOutput = tempCelcius + 273.15;
            break;
        
    }

    if(tempOutput == 'NaN'){
        tempOutputElement.innerHTML = 'Please enter a valid number';
    }
    else{
        tempOutputElement.innerHTML = tempOutput + " " + tempOutUnit;
    }


}

// Mass Conversion
function updateMassUnitIn(unit){
    massInUnit = unit;
    if(massInput != null){
        convertMass()
    }
}
function updateMassUnitOut(unit){
    massOutUnit = unit;

    if(massInput != null){
        convertMass()
    }
}

function convertMass(){
    var massInput = parseFloat(document.getElementById("massInput").value);
    var massGram;
    var massOutput;

    switch(massInUnit){
        case 'mg':
            massGram = massInput / 1000;
            break;
        case 'cg':
            massGram = massInput / 100;
            break;
        case 'dg':
            massGram = massInput / 10;
            break;
        case 'g':
            massGram = massInput;
            break;
        case 'dag':
            massGram = massInput * 10;
            break;
        case 'hg':
            massGram = massInput * 100;
            break;
        case 'kg':
            massGram = massInput * 1000;
            break;
        case 'mt':
            massGram = massInput * 1000000;
            break;
        case 'oz':
            massGram = massInput * 28.3495;
            break;
        case 'lb':
            massGram = massInput * 453.592;
            break;
        case 'st':
            massGram = massInput * 6350.29;
            break;  
    }

    switch(massOutUnit){
        case 'mg':
            massOutput = massGram * 1000;
            break;
        case 'cg':
            massOutput = massGram * 100;
            break;
        case 'dg':
            massOutput = massGram * 10;
            break;
        case 'g':
            massOutput = massGram;
            break;
        case 'dag':
            massOutput = massGram / 10;
            break;
        case 'hg':
            massOutput = massGram / 100;
            break;
        case 'kg':
            massOutput = massGram / 1000;
            break;
        case 'mt':
            massOutput = massGram / 1000000;
            break;
        case 'oz':
            massOutput = massGram / 28.3495;
            break;
        case 'lb':
            massOutput = massGram / 453.592;
            break;
        case 'st':
            massOutput = massGram / 6350.29;
            break;
        
    }

    if(massOutput == 'NaN'){
        massOutputElement.innerHTML = 'Please enter a valid number';
    }
    else{
        massOutputElement.innerHTML = massOutput + " " + massOutUnit;
    }


}

