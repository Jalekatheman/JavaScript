var target = Math.ceil(Math.random() * 10);
var guess = Math.ceil(Math.random()* 10);
var tries = 5;

console.log('Target is ' + target);

while(tries > 0){
    guess = Math.ceil(Math.random() * 10);
  	console.log(guess);
    tries--;
    if(target === guess){
       console.log('The guess got right at first');
       break;
   }else if(target !== guess){
        break;
    }
}