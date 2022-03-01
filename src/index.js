module.exports = function check(str, bracketsConfig) {
    let bracketsPair = Object.fromEntries(bracketsConfig);
    let closeBrackets = []
    let openBrackets = [];
    let len = bracketsConfig.length - 1;
   
    for (let i = 0; i<=len; i++) {
        openBrackets.push(bracketsConfig[i][0]) 
        closeBrackets.push(bracketsConfig[i][1])
       }

      let stack = [];
    
      function getKeyByValue(object, value) {
              return Object.keys(object).find(key => object[key] === value);
              }
      for ( i = 0; i < str.length; i++) {
          if (closeBrackets.includes(str[i])){
             if (getKeyByValue(bracketsPair, str[i])  === stack[stack.length-1]) {
                 stack.pop()
             } else {
                 stack.push(str[i])
             }
          } else {
              stack.push(str[i])
          }
      }
    return (stack.length === 0)
}