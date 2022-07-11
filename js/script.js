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
        txt += `Sum of the numbers written as the sum of digits to the powers of ${num} is ${digitnPowers(num)}.`;
      
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
   const powerSums = [];
   let powRef = {
    '0' : 0,
    '1' : 1,
    '2': 2**n,
    '3': 3**n,
    '4': 4**n,
    '5': 5**n,
    '6': 6**n,
    '7': 7**n,
    '8': 8**n,
    '9': 9**n
   };

   for (let c=10;c<(n+1)*9**n;c++) {
    if (String(c).split("").map(c => powRef[c]).reduce((num,sum) => num + sum,0) === c) powerSums.push(c);
   }

   return powerSums.reduce((num,sum) => num + sum, 0)
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}