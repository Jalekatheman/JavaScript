var target = Math.floor(Math.random() * 11);
var guess = Math.floor(Math.random() * 11);

console.log('Target is ' + target);

while (guess !== target) {
    guess = Math.floor(Math.random() * 11);
    console.log('Guess is' + guess);
}