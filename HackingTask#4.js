// create a function named var extractPassword();

function extractPassword(array){
    
    var newPass = '';
    
    for(var i = 0; i < array.length; i ++){
        
        var characters  = array[i];
        
        if(
          (characters >= 'a' && characters <= 'z') ||
          (characters >= 'A' && characters <= 'Z') ||
          (characters >= '0' && characters <= '9')
         )
        {
            newPass += characters;
        }
    }
        
        return newPass;
    
}

var pass = extractPassword(['p','-','a','/','z']);

console.log(pass);

//

/*var extractPassword(password){


	
};*/

// icludes '/','-' characters;

// should return var string only with (a - z, A - Z, 0 - 9);