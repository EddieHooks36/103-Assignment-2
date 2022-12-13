let = userName = "Edward"; prompt("Enter userName");



let global;

function sum(a,b){
    global="affected";
}
console.log (sum(10,50));
console.log(global);

let displayValues = function(){
    console.log("Curious Minds");
    console.log("12.90");
    console.log("Quantity");
}
displayValues();

let total = 0;

function addCart(price){
    total = total + price;
    console.log(total);
    return total;
}

  function calculateTaxes(){
    quantity = addCart(1)
   let totalTax = quantity * 12.91;

    document.getElementById("receipt").
    innerHTML=

    `<p>Quantity = ${quantity}</p>
    <p>Total = ${totalTax}</p>`;
   
console.log(`The total is : ${totalTax}`);
  }

