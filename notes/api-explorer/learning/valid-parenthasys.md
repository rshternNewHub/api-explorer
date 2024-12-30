# Valid Parentheses

### Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

## An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

### my solution:
I had some challanges along the way:
1. how should we handle edge cases?
  A. if the string is empty?
  b. if the string contains other characters - I can implement match of RegEx expression
  c. not all pairs close

if the string is empty I return false - np pairs found so that's it
if not all corresponding pairs close - we send false. I check this in some ways:
- I use the openState to check if open pair found
- I change the value of isClosed to true after a pair was found and closed and set it back false when a new pair starts
```javascript

function isValid(s) {
  const validArr = [];
  const sLength = s.length;
  let openState = 0;
  let result = false;
  let isClosed = false; //if parantesys was found and popped set to true
  
  //if the string is empty return false
  if(sLength === 0) return result;
  
  for (let i = 0; i < sLength; i++) {
    switch (s[i]) {
      case '(':
        validArr.push(')'); //found open for (
        openState++;
        isClosed = false;
        break;
      case '[':
        validArr.push(']'); //found open for [
        openState++;
        isClosed = false;
        break;
      case '{':
        validArr.push('}'); // found open for {
        openState++;
        isClosed = false;
        break;
      default:
        break;
    }
    
    if(validArr.length > 0)
    {
      switch (s[i]) {
        case ')':
        case ']':
        case '}':
          if(openState > 0 && validArr[openState-1] != s[i]) { // if no closing pair found increment the openState
            openState++;
            break;
          } else {
            validArr.pop();
            openState--;
            isClosed = true;
            break;
          }
        default:
          break;
      }
    }
    if (i === sLength-1 && validArr.length === 0 && isClosed) {
      result = true;
    }
  }
  return result;
};


```
# Better Solution
```javascript

function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (const char of s) {
        if (char in pairs) {
            // If it's an opening bracket, push the corresponding closing bracket
            stack.push(pairs[char]);
        } else {
            // If it's a closing bracket, check if it matches the last opening bracket
            if (stack.pop() !== char) return false;
        }
    }
    
    // Valid if all brackets are matched (stack is empty)
    return stack.length === 0;
}

```
1. Simplified Logic:

- Removed multiple switch statements and combined the logic
- Eliminated need for tracking openState and isClosed flags
- Removed redundant length checks


2. Better Data Structure Usage:

- Used an object pairs to store bracket pairs, making the code more maintainable
- Single array (stack) operation instead of multiple checks


3. Early Return:

- Returns false as soon as an invalid closing bracket is found
- No need to wait until the end of the string


4. Memory Optimization:

- Removed unnecessary variables
- Only stores closing brackets in the stack


More Readable:

Clear intent of what each operation does
Less complex control flow
Uses modern JavaScript features (for...of loop)