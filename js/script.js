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
        txt += `You have entered the number ${num}. <p>`; 
        txt += `Sum of the numbers is ${digitnPowers(num)}.`;
      
    }
    
    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to find the sum of all the numbers that can be written as the sum
    of nth powers of their digits
    digitnPowers(2) returns 0
    digitnPowers(3) returns 1301
    digitnPowers(4) returns 19316
    digitnPowers(5) returns 443839
*/

function digitnPowers(n) {
   let can = [];
   let maxS = '9'.repeat(n+1);
   let max = parseInt(maxS);
   for (let i=2;i<max;i++) {
    let digitPowerSum = i.toString().split("").map(j => parseInt(j)).reduce((sum,d) => sum + (d**n),0);
    if (digitPowerSum == i) can.push(i);
   }
   return can.reduce((s,i) => s + i, 0);
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}