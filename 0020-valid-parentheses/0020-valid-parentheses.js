/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    
    /*
    Input: string w/ brackets only
    Output: Boolean
    EdgeCase: empty string? im assuming return false
    Constraint: brackets only.
    
    
    How do we get it from input to output. 
    
    What is your game plan in normal words? 
    
    You know you will have to iterate, but what do we have to watch out for? Scenarios?
    
    
    
    While iterating, lets say we are on a '(' sign. how should we know when the immediately return false?
    
    if the next bracket is a closing bracket of the opposite?
    
    but what if in this case it was '([[)'
    Then you wouldnt know how to stop it. so how do we keep track of whats inside parenthesis? 
    
    
    can we store it in a variable called currently open? 
    
    
    WAIT 
    can we just keep track.. of the most CURRENTLY OPEN??
    
    Good idea, however, how will you keep track of the previously open ones? 
    
    do we have to break this up into arrays? 
    */
    
 
    
    var currentlyOpen = [];
    
    for (var i = 0; i < s.length; i++) {
        
       
        // if s[i] is open bracket of any kind, change currently open to that.
        // if s[i] is a close bracket, check if its corresponsive to the current open.
            // if it IS NOT. return false. 
    
        var currentBracket = s[i];
        
        if (currentBracket === '[' || currentBracket === '{' || currentBracket === '(') {
            currentlyOpen.push(currentBracket);
        } else {
            if (currentBracket === ')') {
                if (currentlyOpen[currentlyOpen.length - 1] !== '(') {
                    return false
                } else {
                    currentlyOpen.pop();
                }
            } else if (currentBracket === ']') {
                       if (currentlyOpen[currentlyOpen.length - 1] !== '[') {
                    return false
                } else {
                    currentlyOpen.pop();
                }
                       } else if (currentBracket === '}') {
                                  if (currentlyOpen[currentlyOpen.length - 1] !== '{') {
                    return false
                } else {
                    currentlyOpen.pop();
                }
                                  }
        }
    }
    
    if (currentlyOpen.length !== 0) {
        return false
    } else {
        return true;
    }
    
};