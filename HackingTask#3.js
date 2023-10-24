var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];

var newDisk = [];// create here a copy

var corruptionSymbol = 'ø';// to take out

for(var i = 0; i < targetDisk.length; i++){
    
    if(targetDisk[i] !== corruptionSymbol){
        newDisk.push(targetDisk[i]);
    }

}
var string = newDisk.join('');

console.log(string);