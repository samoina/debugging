$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function (blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});


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
  let newBalance=balance;

  while (countYears< numberOfYears) {
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

function investNow (balance1, rate1, balance2, rate2, time) {
  
}

investNow(10000000, 5, 8500000, 6.6, 10);

