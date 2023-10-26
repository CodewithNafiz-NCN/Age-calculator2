const inputdata = Number(prompt("Input your birth year"))
const iimputyear = Number(prompt("Input current year"))
const inputmonth = Number(prompt("Input your month in number"))
const inputday = Number(prompt("Input your day in number"))

  const calcage = iimputyear - inputdata;
  const calcmonth = 12 - inputmonth;
  const calcday = 30 - inputday;
  const calage = `your age is ${calcage} Years ${calcmonth} Months and ${calcday} Days`
  
 
 alert(calage);