# Replacing

You will get an input of a string, that has two or more parts separated by commas.
You need to take the first part and replace the letters in it with the ones specified in the rules following.
All of the replacing must happen on the initial form of the string (look at example two)

## Examples

```js
replacing("'The quick brown fox', 'o,$'")
// => "The quick br$wn f$x"
replacing("'quick', 'q,k', 'k,4'")
// => Output kuic4
// Note that is is not 4uic4
```