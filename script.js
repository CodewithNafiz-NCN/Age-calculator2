"use strict";
//text stor for reusing
function resultText(text) {
  document.querySelector(".result-text").textContent = text;
}

// result will show when its clicked function
document.querySelector(".button-1").addEventListener("click", function () {
  // User Birth Year, Month and Day data inputs
  // todays date input
  const iimputCDay = Number(document.querySelector(".Select").value);
  //year input
  const inputdata = Number(document.querySelector(".putyear").value);
  // month input
  const inputmonth = Number(document.querySelector(".select-month").value);
  // birth date input
  const inputday = Number(document.querySelector(".Select-day-1").value);

  // year input claculation
  const calcage = 2023 - inputdata;
  //Month Calculation -- Have to Change
  const calcmonth = 11 - inputmonth;
  //Day calculation
  const calcday = iimputCDay - inputday;

    // the logic for claculator
  if (calcday > 0) {
        resultText( `${calcage} Years ${calcmonth} Months & ${calcday} Days`);
  } else {
    resultText(`Something Went Wrong :/`);
  }
});


console.log(typeof calcage);

//Output Visible result
//alert(calage);
//Thanks For Using Trxt
/* alert(Thanks For Using Our Site 
 
Other information-
Site Version: 1.0.0.3
First Release Date: 25/10/2023
Employees: 2
     - Lead Devloper: Nafiz.
     - Helper: Sany.
  ;) ) */


  // else if (0 >= calcmonth) {
  //   resultText(${calcage} Years & ${calcday} Days);
  // } else if (0 >= calcday) {
  //   resultText(${calcage} Years ${calcmonth} Months);
  // }