# Utilities
## General
This repository is a collection of code snippets that I use often and for each script I've prepared a vanilla JS and jQuery variant.
## String Manipulation
### Beautify
This method removes any unnecessary white space from your string and makes it lower case.
- Vanilla JS
```
let test = "              TeStS       "
test.beautify();
//Output: tests
```
- jQuery
```
//<p>       HeLlO tHeRE         </p>
console.log($("p").beautify());
//Output: "hello there"
```
### massReplace
This method replaces substring occurences based on input object and (RegExp) flags.  
- Vanilla JS
```
let test = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
test.massReplace({"Lorem":"Merol", "Dolor": "Rolod"}, "gi");
//Output: "Merol ipsum Rolod sit amet, consectetur adipiscing elit."
```
- jQuery
```
//<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
$("p").massReplace({"Lorem":"Merol", "Dolor": "Rolod"}, "gi")
//Output: "Merol ipsum Rolod sit amet, consectetur adipiscing elit."
```
