var add = function(operand1, operand2){
    
    return operand1 + operand2;
     
 };
 
 var calculate = function(operand1, operand2, operation){
     
     var result = operation(operand1,operand2);
     
     console.log(result);
 };
 
 calculate(7,5,add);