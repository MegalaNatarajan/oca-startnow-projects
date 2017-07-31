// Write your JavaScript here
function onClickEvent() {
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  var total = 0;
  var dollars =0;
  var cents =0;
  var amount_due = parseFloat(document.getElementById('amount-due').value);
  var amount_received = parseFloat(document.getElementById('amount-received').value);
  document.getElementById('calculate-change');
  total = amount_received - amount_due;
  // dollar calculation
  dollars = Math.floor(total);
  document.getElementById("dollars-output").innerHTML = dollars;
  // cents calculation
  cents = Math.round((total % 1) * 100);
  // quarters calculation
  quarters = Math.floor(cents/25);
  document.getElementById("quarters-output").innerHTML = quarters;
  // dimes calculation
  dimes = Math.floor((cents%25)/10);
  document.getElementById("dimes-output").innerHTML = dimes;
  // nickels calculation
  nickels = Math.floor(((cents%25)%10)/5);
  document.getElementById("nickels-output").innerHTML = nickels;
  // pennies calculation
  pennies = Math.floor(((cents%25)%10)%5);
  document.getElementById("pennies-output").innerHTML = pennies;
  
}