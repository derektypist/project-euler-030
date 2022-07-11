# Project Euler 030 - Digit n Powers

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

   1634 = 1^4 + 6^4 + 3^4 + 4^4

   8208 = 8^4 + 2^4 + 0^4 + 8^4

   9474 = 9^4 + 4^4 + 7^4 + 4^4

As 1 = 1^4 is not a sum, it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316

The aim is to find the sum of all the numbers that can be written as the sum of n powers of their digits, using HTML Forms and JavaScript.

Information taken from [Project Euler 030](https://projecteuler.net/problem=30)

## UX

**Getting Started**

Enter a whole number, between 2 and 6 in the input field and click on the Submit Button.  You will see the sum of all the numbers that can be written as the sum of the n powers of their digits, unless you have made an invalid input.  For example, if you entered 4, you would expect to get 19316.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 6
- Entering a number, but it is not an integer

As a user, I expect the function `digitnPowers(2)` to return a number.

As a user, I expect the function `digitnPowers(2)` to return 0.

As a user, I expect the function `digitnPowers(3)` to return 1301.

As a user, I expect the function `digitnPowers(4)` to return 19316.

As a user, I expect the function `digitnPowers(5)` to return 443839.

**Information Architecture**

The function `digitnPowers(n)` returns a number, where `n` is number between 2 and 6.

## Features

Allows the user to enter a number, as well as getting the sum of all the numbers that can be written as the sum of nth powers of their digits.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Technologies include HTML5, CSS3, JavaScript, Bootstrap 5.2.0-Beta1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-030) at the main branch.

## Credits

### Content

Written by me, though code taken inside the `digitnPowers(n)` function was taken from TORTO21 in the thread for Problem 30 in the Project Euler Forum.  This was accessed on 11 July 2022.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)