let distance = 950;
let amount;

if (distance <= 100) {
    amount = 5;
} else if (distance <= 500) {
    amount = 10;
} else if (distance <= 1000) {
    amount = 20;
} else {
    amount = 40;
}

console.log("Amount to pay: " + amount + " USD");