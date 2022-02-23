module.exports = function check(str, bracketsConfig) {
  let brackets = Object.fromEntries(bracketsConfig);
  let openBrackets = [];
  let sameBrackets = '';
  let len = bracketsConfig.length - 1;
 
  for (let i = 0; i<=len; i++) {
      openBrackets.push(bracketsConfig[i][0]) 
     }
    let stack = [];
    
    function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
            }
    for ( i = 0; i < str.length; i++) {
            if (getKeyByValue(brackets, str[i]) === brackets[str[i]]) {
                    sameBrackets = sameBrackets + str[i]
                } else if ((openBrackets.includes(str[i]))) {
                stack.push(str[i])
            } else {
                if (stack.length === 0) {
                    return false
                }

                let topElement = stack[stack.length - 1]
                
        
            if (getKeyByValue(brackets, str[i]) === topElement) {
                stack.pop();
            } else {
                return false
            }
            }
             
        }

        return (stack.length === 0)&&(sameBrackets.length%2 === 0)
    }