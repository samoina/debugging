//<------------ABSTRACTION---------->
//part of what we used for akan names
function isInvalidDay(d) {
  return d < 1 || d > 31;
};

// console.log(isInvalidDay(91));

function isInvalidMonth(m) {
  return m < 1 || m > 12;
};

// console.log(isInvalidMonth(19));

function isInvalidRange(minValidNumber, maxValidNumber, testNumber) {
  return testNumber < minValidNumber || testNumber > maxValidNumber;
};

// console.log(isInvalidRange(1, 12, 9));

//<----------ABSTRACTION-------------->

//Standard Njonge invest 10,000,000, interest rate is 5%
//F. Marete bank invest 8,500,000, interest rate is 6.6%
//time is 10 years
//ALGORITHM
//Calculate balance of investment after a period of time for both, say 1 year.
//Calculate profit for bank 1
//Calculate profit for bank 2
//compare SN-Profit with FM-Profit and pick the higher number


// let bank1 = "Standard Njonge Bank";
// let bank2 = "F Marete Bank";

function moreProfitable(balance, interestRate, time) {
  let currentBalance = balance;
  let totalInterest = 0;
  for (let year = 1; year <= time; year++) {
    let accumulatedInterest = currentBalance * (interestRate / 100);
    currentBalance += accumulatedInterest;
    totalInterest += accumulatedInterest;
  }
  console.log(totalInterest);
  return currentBalance;

};

// let bank1Profit = moreProfitable(10000000, 5, 5);
// console.log(bank1Profit);



//<--------------Same as above------------>

// let calculateIncreasedBalance = function(balance, interestRate){
//   return balance * (1 + (interestRate / 100));
// }; 

let calculateFinalBalance = function (balance, interestRate, numberOfYears) {
  let countYears = 0;
  let accAmount;
  let newBalance = balance;

  while (countYears < numberOfYears) {
    newBalance = newBalance * (1 + (interestRate / 100));

    countYears = countYears + 1
  }
  return Math.round(newBalance);
};

// let bank1 = "Standard Njonge Bank";
// let bank2 = "F Marete Bank";

// let years = 10;
// let balance1 = 10000000;
// let interestRate1 = 5;

// let balance2 = 8500000;
// let interestRate2 = 6.6;

// let finalBalance1 = console.log(calculateFinalBalance(balance1, interestRate1, years));

// let finalBalance2 = console.log(calculateFinalBalance(balance2, interestRate2, years));

// let profit1 = finalBalance1-balance1;
// let profit2 = finalBalance2 -balance2;

// if (profit1>profit2) {
//   console.log(bank1 + " is a better opportunity!");
// } else {
//   console.log(bank2 + " is a better opportunity!");
// }


//<-----------Function to find the better investment from two options given the initial investment amount, interest rate and time invested--------------->
let prinicpalAmount1 = 10000000;
let rate1 = 5;

let prinicpalAmount2 = 8500000;
let rate2 = 10;

let yearsInvested = 10;

function investNow(balance1, rate1, balance2, rate2, time) {
  //Reassign the variables since this value will be changing dynamically through the iterations
  let currentValue1 = balance1;
  let currentValue2 = balance2;
// add counter to track # of years that it will take for second amount to be greater than first amount
  let countYears = 1;


  //Loop through the function 10X ( to represent the number of years invested) 
  for (let year = 1; year <= time; year++) {
    //Calculate the interest earned, then add it to the initial investment amount to be the amount to calculate interest on in the iterations
    let interest1 = currentValue1 * (rate1 / 100);
    currentValue1 += interest1;
   

    let interest2 = currentValue1 * (rate2 / 100);
    currentValue2 += interest2;
     console.log(Math.round(currentValue2));

    //add a counter to check how many years it will take for accrued amount 2 to be greater than accrued amount1
   
    if (currentValue2<= currentValue1) {
      countYears++
    }
  }
  //round up the accrued amount
  //  console.log(Math.round(currentValue1));
  //  console.log(Math.round(currentValue2));

   //subtract the initial amount from the accrued amount to find the profit earned and determine the better investment
   let profit1 = currentValue1-balance1;
  //  console.log(Math.round(profit1));

   let profit2 = currentValue2-balance2;
  //  console.log(Math.round(profit2));

  console.log(countYears);

   //Compare the two and output the better investment option
   if (profit1>profit2) {
     console.log("Investment 1 is definitely the better option!");
   } else {
     console.log("Investment 2 is the way to go, put your money there!");
   }
}

investNow(prinicpalAmount1, rate1, prinicpalAmount2, rate2, yearsInvested);

