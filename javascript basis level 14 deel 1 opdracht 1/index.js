// function makeSandwich(food)
//               {take sandwich;
//                put <food> on top;
//                take ianother sandwich and put it on top;}

function makeSandwich(topping) {
    return ('Get one slice of bread',
        'Add ' + topping,
        'Put a slice of bread on top');
}

console.log("There you go a sandwich with " + makeSandwich('ham'));
console.log("There you go a sandwich with " + makeSandwich('cheese'));

function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log("De prijs wordt : " + calculateDiscountedPrice(100, 25));

function calculateDiscountedPrice2(totalAmount, discount) {
    if (totalAmount >= 25) { return totalAmount; } else return Math.round(totalAmount - discount);
}

console.log("De prijs wordt " + calculateDiscountedPrice2(25, 25) + " eur");