let celsius = document.getElementById("celsius");
let farenheit = document.getElementById("farenheit");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    farenheit.value = parseFloat(output.toFixed(2));
}

function FarToCel(){
    let output = ( parseFloat(farenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
}