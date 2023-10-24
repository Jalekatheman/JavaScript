var correctGuesses = 0;

//4 caracters long pass -> password <= 4
// correctGuesses is a counter of what you gessed so far
 while(correctGuesses !== 4){
	
     var anyGuess = Math.ceil(Math.random() *3);

     
     if(anyGuess === 1) {
         
     correctGuesses++;
         
     console.log('Found ' + correctGuesses + ' characters');
         
    } else if (anyGuess === 2) {
        
    	console.log('Starting over');
        
        correctGuesses = 0;
        
    } 
     
 }
     if(correctGuesses === 4) {
        
        console.log('Terminal hacked!');
  
 }
// create a loop
//stop when all 4 char guessed
//each loop random number between 1-3: when you guess one correctGuesses increases 1 and prints 'Found (x) characters'
// if its incorrect and too many attempts - resets correctGuesses - to 0 and prints 'Starting over'
// incorrect but not detected correctGuesses - keeps value
// when correctGuesses === 4 print 'Terminal hacked!'.