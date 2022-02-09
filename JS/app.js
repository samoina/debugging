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


//<------------ABSTRACTION AND COMPOUND INTEREST------------->

let prinicpalAmount1 = 10000000;
let rate1 = 5;

let prinicpalAmount2 = 8500000;
let rate2 = 10;

let yearsInvested = 10;

function investNow(balance1, rate1, balance2, rate2, time) {
  let currentValue1 = balance1;
  let currentValue2 = balance2;
  let countYears = 1;

  for (let year = 1; year <= time; year++) {
       let interest1 = currentValue1 * (rate1 / 100);
    currentValue1 += interest1;
   

    let interest2 = currentValue1 * (rate2 / 100);
    currentValue2 += interest2;
   
    if (currentValue2<= currentValue1) {
      countYears++
    }
  }

   let profit1 = currentValue1-balance1;
   let profit2 = currentValue2-balance2;

  console.log(countYears);
  
   if (profit1>profit2) {
     console.log("Investment 1 is definitely the better option!");
   } else {
     console.log("Investment 2 is the way to go, put your money there!");
   }
}

investNow(prinicpalAmount1, rate1, prinicpalAmount2, rate2, yearsInvested);





