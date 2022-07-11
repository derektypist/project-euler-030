// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>6 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 6.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Sum of all the numbers that can be written as the sum of ${num}powers of their digits is ${digitnPowers(num)}.`;
    }
    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}