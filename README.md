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

As a user, I expect the function `digitnPowers(2)` to return a number.

As a user, I expect the function `digitnPowers(2)` to return 0.

As a user, I expect the function `digitnPowers(3)` to return 1301.

As a user, I expect the function `digitnPowers(4)` to return 19316.

As a user, I expect the function `digitnPowers(5)` to return 443839.

**Information Architecture**

The function `digitnPowers(n)` returns a number, where `n` is number between 2 and 6.