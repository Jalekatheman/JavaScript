function getValidPassword(password){
    
    var newOne = [];
    
    
    for(var i = 0; i < password.length; i++){
        
        var array = password[i];
        
        var counter = 0;
        
        for(var j = 0; j < array.length; j++){
            
            if(array[j] % 2 !== 0 ){
                
                counter ++;

                break;
            }
            
        }
          	if(counter === 0){
            
            newOne.push(array);
            
        }
    }
        return newOne[0];
}


var loggedPasscodes = [
	[1, 4, 4, 2],
    [1, 2, 3, 1],
    [2, 2, 2, 1],
    [5, 5, 5, 5],
    [4, 3, 4, 3],
    [4, 1, 4, 8],
    [2, 6, 0, 8],
    [6, 2, 8, 1]
];

var valid = getValidPassword(loggedPasscodes);
console.log(valid);