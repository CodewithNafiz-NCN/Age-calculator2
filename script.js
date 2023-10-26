//current year, month and day data inputs
const iimputCYear = Number(prompt("বর্তমান চলিত বছর ? in English!"))
const iimputCMonth = Number(prompt("বর্তমান চলিত মাস কত সংখ্যায় ? in English!"))
const iimputCDay = Number(prompt("বর্তমান চলিত তারিখ কত ? in English!"))

// User Birth Year, Month and Day data inputs 
const inputdata = Number(prompt("আপনার জন্মের বছর কত ? in English!"))
const inputmonth = Number(prompt("আপনার জন্মের মাস কত সংখ্যায় ? in English!"))
const inputday = Number(prompt("আপনার জন্মের তারিখ কত ? in English!"))

//Calculation For Age
  //Year calculatuon
  const calcage = iimputCYear - inputdata;
  //Month Calculation
  const calcmonth = iimputCMonth - inputmonth;
  //Day calculation
  const calcday = iimputCDay - inputday;
  //Result And Result text 
  const calage = `Your age is ${calcage} Years ${calcmonth} Months and ${calcday} Days`
  
 //Output Visible result
 alert(calage);
 //thanks for using alert and text
 alert(`Thanks For Using Our Site 
 
Other information-
Site Version: 1.0.0.2
First Release Date: 25/10/2023
Employees: 2
     - Lead Devloper: Nafiz.
     - Helper: Sany.
  ;) `)