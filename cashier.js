const applesPrice = 0.50;

let totalCost = 0;

function scanApples(quantity) {
    totalCost += applesPrice * quantity;
}

scanApples(1);
console.log("The total cost is:", totalCost); 

scanApples(3);
console.log("The total cost is:", totalCost);
const applePrice = 0.50;

