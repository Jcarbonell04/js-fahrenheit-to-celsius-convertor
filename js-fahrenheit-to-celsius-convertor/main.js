// Simple Addition Calculator

// Event Listener
document.getElementById('calc-btn').addEventListener('click', calcTotal);

//Event Function
function calcTotal() {
    //INPUT - Get two numbers
    let num1 = Number(document.getElementById('num1').value);


    console.log(num1);
    console.log(typeof(num1));

    //PROCESS - Add the two numbers 
    let celsius = (num1 - 32) * (5/9) + "°C";

    //OUTPUT - Display the total
    document.getElementById('result').innerHTML = celsius;

}