var a = Number(prompt('Enter A'));
var b = Number(prompt('Enter B'));
var c = Number(prompt('Enter C'));

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
     document.write('You incorrectly entered number! Try again.');
}
if(a==0){
   document.write("A can not be 0! Try again");
}
else{
    var result = squareEq(a, b, c);
    document.write(result);
}


function squareEq(a, b, c) {
    
    var d = Math.pow(b, 2)-4*a*c;
    var result;
    
    if(d > 0) {
        result = 'x1 = ' + (-b - Math.sqrt(d)) / (2 * a); 
        result += ' x2 = ' + (-b + Math.sqrt(d)) / (2 * a);
    }
    else if(d == 0){
        result = 'x1,2 = ' + (-b/(2*a));
    }
    else{
        result = 'no decisions';
    }
    return result;
}