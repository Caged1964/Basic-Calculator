'use strict'

//selecting elements
const oneEl = document.querySelector('.btn-one');
const twoEl = document.querySelector('.btn-two');
const threeEl = document.querySelector('.btn-three');
const fourEl = document.querySelector('.btn-four');
const fiveEl = document.querySelector('.btn-five');
const sixEl = document.querySelector('.btn-six');
const sevenEl = document.querySelector('.btn-seven');
const eightEl = document.querySelector('.btn-eight');
const nineEl = document.querySelector('.btn-nine');
const zeroEl = document.querySelector('.btn-zero');
const delEl = document.querySelector('.btn-del');
const addEl = document.querySelector('.btn-add');
const clearEl = document.querySelector('.btn-clear');
const subEl = document.querySelector('.btn-subtract');
const multiEl = document.querySelector('.btn-multiply');
const divEl = document.querySelector('.btn-divide');
const equalEl = document.querySelector('.btn-equal');
const dispAbove = document.querySelector('.display-above');
const dispBelow = document.querySelector('.display-below');


//declaring variables
let aboveDisp, belowDisp, result, prevOp,equalified;

const init = function () {
    dispAbove.textContent = '';
    dispBelow.textContent = '';
    aboveDisp = '';
    belowDisp = '';
    result = '';
    prevOp = 1;
    equalified=false;
}
init();
const strToInt = function (text) {
    return Number(text);
}
const TextBelow = function (text) {
    // belowDisp += text;
    result += text;
}
const calc = function (prevOp) {
    if (prevOp === 1) {
        belowDisp = strToInt(belowDisp) + strToInt(result);
    }
    else if (prevOp === 2) {
        belowDisp = strToInt(belowDisp) - strToInt(result);
    }
    else if (prevOp === 3) {
        belowDisp = strToInt(belowDisp) * strToInt(result);
    }
    else if (prevOp === 4) {
        belowDisp = strToInt(belowDisp) / strToInt(result);
    }
}


oneEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('1');
    dispBelow.textContent = result;
    }
})
twoEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('2');
    dispBelow.textContent = result;
    }
})
threeEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('3');
    dispBelow.textContent = result;
    }
})
fourEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('4');
    dispBelow.textContent = result;
    }
})
fiveEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('5');
    dispBelow.textContent = result;
    }
})
sixEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('6');
    dispBelow.textContent = result;
    }
})
sevenEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('7');
    dispBelow.textContent = result;
    }
})
eightEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('8');
    dispBelow.textContent = result;
    }
})
nineEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('9');
    dispBelow.textContent = result;
    }
})
zeroEl.addEventListener('click', function () {
    if(!equalified){
    TextBelow('0');
    dispBelow.textContent = result;
    }
})

addEl.addEventListener('click', function () {
    if(!equalified){
    aboveDisp=aboveDisp+result+'+';
    dispAbove.textContent=aboveDisp;
    calc(prevOp);
    dispBelow.textContent=belowDisp;
    result='';
    prevOp =1;    
    }
})
subEl.addEventListener('click', function () {
    if(!equalified){
    aboveDisp=aboveDisp+result+'-';
    dispAbove.textContent=aboveDisp;
    calc(prevOp);
    dispBelow.textContent=belowDisp;
    result='';
    prevOp =2;
    }
})
multiEl.addEventListener('click', function () {
    if(!equalified){
    aboveDisp=aboveDisp+result+'*';
    dispAbove.textContent=aboveDisp;
    calc(prevOp);
    dispBelow.textContent=belowDisp;
    result='';
    prevOp =3;
    }
})
divEl.addEventListener('click', function () {
    if(!equalified){
    aboveDisp=aboveDisp+result+'/';
    dispAbove.textContent=aboveDisp;
    calc(prevOp);
    dispBelow.textContent=belowDisp;
    result='';
    prevOp =4;
    }
})
equalEl.addEventListener('click', function () {
    if(!equalified){
    aboveDisp=aboveDisp+result;
    dispAbove.textContent=aboveDisp;
    calc(prevOp);
    dispBelow.textContent = belowDisp;
    equalified = true;
    }
})
clearEl.addEventListener('click', function () {
    init();
})
delEl.addEventListener('click', function () {
    if(!equalified){
    result = result.slice(0, -1);
    dispBelow.textContent = result;
    }
})

