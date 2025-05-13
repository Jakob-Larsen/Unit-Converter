import {conversionTables} from './conversiontables.js';


// Variables
var massInUnit='mg', massOutUnit = 'mg';
const massOutputElement = document.querySelector('#outputMass');

var lengthInUnit='mm', lengthOutUnit = 'mm';
const lengthOutputElement = document.querySelector('#outputLength');

var areaInUnit='mm2', areaOutUnit = 'mm2';
const areaOutputElement = document.querySelector('#outputArea');

var volInUnit='mm3', volOutUnit = 'mm3';
const volOutputElement = document.querySelector('#outputVol');

var tempInUnit='c', tempOutUnit = 'c';
const tempOutputElement = document.querySelector('#outputTemp');

var speedInUnit='mps', speedOutUnit = 'mps';
const speedOutputElement = document.querySelector('#outputSpeed');

var timeInUnit='ms', timeOutUnit = 'ms';
const timeOutputElement = document.querySelector('#outputTime');

var energyInUnit='j', energyOutUnit = '';
const energyOutputElement = document.querySelector('#outputEnergy');

var angleInUnit='deg', angleOutUnit = 'deg';
const angleOutputElement = document.querySelector('#outputAngle');

var calculation;
const calcOutputElement = document.querySelector('#outputCalc');
const calcInputElement = document.querySelector('#inputCalc');


function roundRight(num){
    if (num === 0) return "0";
    if (Math.abs(num) >= 1) {
        return Number(num.toFixed(4)).toString();
    } else if (Math.abs(num) < 1e-6) {
        return num.toExponential(4); // scientific notation for very small numbers
    } else {
        return Number(num.toFixed(8)).toString();
    }
}

function pickConvertion(convertion) {
    var i, tabs;

    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";  
    }

    var buttons = document.getElementsByClassName("tabbutton");
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

function convert(input, unitIn, unitOut, type, element){
    const value = Number(input);
    if(isNaN(value)){
        element.innerHTML = 'Please enter a valid number';
        return;
    } else {
        var output = conversionTables[type].fromBase[unitOut](conversionTables[type].units[unitIn](value));
        element.innerHTML = roundRight(output) + " " + unitOut;
    }
}

function updateUnit(inOut, type, unit){
    var typeLower = type.toLowerCase();
    eval(`${typeLower}${inOut}Unit = '${unit}';`);

    convertFunction(type)
}

function convertFunction(type){
    
    var input = document.getElementById('input'+type).value;
    var typeLower = type.toLowerCase();

    eval(`convert(input, ${typeLower}InUnit, ${typeLower}OutUnit, '${typeLower}', ${typeLower}OutputElement);`);
}

window.onload = () =>{
    pickConvertion('home')

window.pickConvertion = pickConvertion;
window.convertFunction = convertFunction;
window.updateUnit = updateUnit;
}

function calcButton(input){
    calculation += input;
    calcInputElement.value += calculation
}

function calcClear(){
    calculation = '';
}

function calculate(){
    var output;
    try{
        eval('output = ' + calculation);
    }catch(e){
        output = 'Error';
    }
    calcOuptut.element.innerHTML = output;
    calculation = '';
    inputCalcElement.value = '';
}