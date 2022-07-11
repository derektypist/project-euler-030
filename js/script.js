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
        const POWERS = Array(10).fill(0).map((_,index) => index**num);     
        txt += `Sum of the numbers is .`;
      
    }
    
    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to check if the digits in num have a sum equal to num
*/
function isPowerSum(num) {
    let sum = 0;
    let staysUnder = num.toString().split("").every((digit) => {
        sum += POWERS[digit];
        return sum<=num;
    });

    return staysUnder && (sum===num);
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
   
    const minVal = 2**n;
    const maxVal = 9**(n+1);
    let sum = 0;
    for (let i=minVal;i<maxVal;i++) {
        if (isPowerSum(i)) sum += i;
    }
    return sum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}