var chocolate = true;
var strawberry = true;
var stracciatella = true;
var caramel = false;

var iceCream = (strawberry && (chocolate || stracciatella) || (!caramel));

console.log(iceCream);