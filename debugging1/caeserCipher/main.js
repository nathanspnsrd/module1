const readline = require('readline-sync');
const input = readline.question('What phrase would you like to encrypt? ');
const shift = parseInt(readline.question('How many letters would you like to shift? '));

function ceaserCipher(input, shift) {
    if(shift < 0) {
        return ceasarShift(input, shift + 26);
    }

    var output = "";

    for (var i = 0; i < input.length; i++) {
        var c = input[i];

        if(c.match(/[a-z]/i)) {
            var code = input.charCodeAt(i);

            if(code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        output += c;    
    }
    return output;
}

var itWorks = ceaserCipher(input, shift)
console.log(itWorks)