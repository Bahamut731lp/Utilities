# Utilities
## General
This repository is a collection of code snippets that I use often and for each script I've prepared a vanilla JS and jQuery variant.
##String Manipulation
###Beautify
This method removes any unnecessary white space from your string and makes it lower case.
- Vanilla JS
```
let test = "              TeStS       "
console.log(test.beautify())
//Output: tests
```
- jQuery
```
$("p").beautify();
```
