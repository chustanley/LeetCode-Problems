/**
 * @param {string} s
 * @return {number}
 */



var romanToInt = function(s) {
    var romanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    
    var resultNumber = 0;
    
    for (var i = 0; i < s.length; i++) {
        var current = s[i];
        var after = s[i + 1];
        
        if (romanNumbers[current] < romanNumbers[after]) {
            var lessThan = romanNumbers[after] - romanNumbers[current];
            resultNumber += lessThan;
            i++;
            
        } else {
            resultNumber += romanNumbers[current]
        }

      

        
    }
    
    return resultNumber;
};