# Valid Parentheses

<br>

## Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

## An input string is valid if:

## Open brackets must be closed by the same type of brackets.
## Open brackets must be closed in the correct order.

<br>

## [Leetcode](https://leetcode.com/problems/valid-parentheses/)

<br>

### Example 1:
```
Input: s = "()"
Output: true
```
<br>

### Example 2:
```
Input: s = "()[]{}"
Output: true
```
<br>

### Example 3:
```
Input: s = "(]"
Output: false
``` 
<br>

### Constraints:
```
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```

<br>

### Tags: [STACK](https://leetcode.com/tag/stack/), [STRING](https://leetcode.com/tag/string/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- An interesting property about a valid parenthesis expression is that a sub-expression of a valid expression should also be a valid expression. (Not every sub-expression) e.g.
    <br>

            { { } [ ] [ [ [ ] ] ] } is VALID expression

            [ [ [ ] ] ]    is VALID sub-expression

            { } [ ]                is VALID sub-expression
    <br>
    Can we exploit this recursive structure somehow?
    
<br>

- What if whenever we encounter a matching pair of parenthesis in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.
    <br>

            { { ( { } ) } }
                |_|

            { { (      ) } }
                |______|

            { {          } }
            |__________|

            {                }
            |________________|

    VALID EXPRESSION!

<br>

- The stack data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively i.e. from outside to inwards.
