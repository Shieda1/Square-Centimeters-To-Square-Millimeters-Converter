// https://www.omnicalculator.com/conversion/square-centimeters-to-square-millimeters-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squareMillimetersRadio = document.getElementById('squareMillimetersRadio');
const squareCentimetersRadio = document.getElementById('squareCentimetersRadio');

let squareMillimeters;
let squareCentimeters = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squareMillimetersRadio.addEventListener('click', function() {
  variable.textContent = 'Square Centimeters';
  squareCentimeters = v;
  result.textContent = '';
});

squareCentimetersRadio.addEventListener('click', function() {
  variable.textContent = 'Square Millimeters';
  squareMillimeters = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squareMillimetersRadio.checked)
    result.textContent = `Square Millimeters = ${computesquareMillimeters().toFixed(5)}`;

  else if(squareCentimetersRadio.checked)
    result.textContent = `Square Centimeters = ${computesquareCentimeters().toFixed(5)}`;
})

// calculation

function computesquareMillimeters() {
  return Number(squareCentimeters.value) * 100;
}

function computesquareCentimeters() {
  return Number(squareMillimeters.value) / 100;
}