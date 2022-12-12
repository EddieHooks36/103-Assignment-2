let productName = "Curious Minds"; prompt ("Enter ProductName");
let price = ""; prompt ("Enter Price");
let quantity = ""; prompt ("Enter Quantity");

document.write(`
       <p>product: ${productName}</p>
       <p>price: ${price}</p>
       <p>quantity: ${quantity}</p>
`)


let global;

function sum(a,b){
    global="affected";
    return 10+10;
}
console.log (sum(10,50));
console.log(global);

let displayValues = function(){
    console.log("Displaying values ...")
}  
displayValues;

let total = 0;

function addCart(price){
    total = total + price;
    console.log(total);
    return total;
}
function calculateTaxes(){
    subtotal = addCart(2);
    
    let totalTax = subtotal * 1.5; 

    document.getElementById("receipt").
    innerHTML=
    
        `<p>Subtotal = ${subtotal}</p>
        <p>Total = ${totalTax}</p>`;
}