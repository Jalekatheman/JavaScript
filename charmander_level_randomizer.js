var charmanderLevel = Math.ceil(Math.random() * 100);

if(charmanderLevel >= 0 && charmanderLevel <= 15){
    console.log('Charmander');
} else if(charmanderLevel >= 16 && charmanderLevel <= 35){
    console.log('Charmeleon');
} else if(charmanderLevel >= 36 && charmanderLevel <= 100){
    console.log('Charizard');
} else{
    console.log('Charizard is as good as it gets');
}