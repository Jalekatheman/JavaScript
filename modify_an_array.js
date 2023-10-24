var xMen = ['Professor X', 'Cyclops', 'Beast', 'Iron-Man', 'Hobgoblin'];
var freelancers = ['Legion', 'Magneto'];

xMen.pop();
xMen.pop();

console.log(xMen);

for(var i = 0; i < xMen.length; i++){
    
    freelancers.push(xMen[i]);
    
    console.log(freelancers[i]);
}