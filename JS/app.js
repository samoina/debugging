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



  //<------------ABSTRACTION AND COMPOUND INTEREST------------->

  $("#investment form").submit(function (event) {
    let prinicpalAmount1 = parseInt(document.getElementById("principalAmount1").value);
    let rate1 = parseFloat(document.getElementById("rate1").value);
    let yearsInvested = parseInt(document.getElementById("time").value);

    let prinicpalAmount2 = parseInt(document.getElementById("principalAmount2").value);
    let rate2 = parseFloat(document.getElementById("rate2").value);

    function investNow(balance1, rate1, balance2, rate2, time) {
      let currentValue1 = balance1;
      let currentValue2 = balance2;
      let countYears = 1;

      for (let year = 1; year <= time; year++) {
        let interest1 = currentValue1 * (rate1 / 100);
        currentValue1 += interest1;


        let interest2 = currentValue1 * (rate2 / 100);
        currentValue2 += interest2;

        if (currentValue2 <= currentValue1) {
          countYears++
        }
      }

      let accruedAmount1 = Math.round(currentValue1);
      let accruedAmount2 = Math.round(currentValue2);

      // let blanks = ["principalAmount1", "principalAmount2", "rate1", "rate2", "time", "accruedAmount1", "accruedAmount2"];

      // let numbersToText = ["balance1", "balance2", "rate1", "rate2", "time", "accruedAmount1", "accruedAmount2"]

      // blanks.forEach(function(blank) {
        
      // })

      $(".principalAmount1").text(balance1);
      $(".rate1").text(rate1);
      $(".principalAmount2").text(balance2);
      $(".rate2").text(rate2);
      $(".time").text(time);
      $(".accruedAmount1").text(accruedAmount1);
      $(".accruedAmount2").text(accruedAmount2);


      let profit1 = currentValue1 - balance1;
      let profit2 = currentValue2 - balance2;

      console.log(countYears);

      if (profit1 > profit2) {
        let text1 = "Investment 1 is definitely the better option!";      
        $("#betterOppo").text(text1);
      } else {
       let text2 = "Investment 2 is the way to go, put your money there!"
        $("#betterOppo").text(text2);
      }
    }

    investNow(prinicpalAmount1, rate1, prinicpalAmount2, rate2, yearsInvested);

    $("#information").show();

    event.preventDefault();

  });
});


