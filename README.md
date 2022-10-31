# vic.js
**WILL ADD TEST FILES SOON**
Hey, so I made a light-weight library with functions that come in handy from time to time. Overtime, this will grow. There's some [Leetcode](https://leetcode.com/) questions in here too that I like to compile together in one place to study/refer to later on. Also contains some functions found in the [Lodash](https://lodash.com/) library. Just helps to streamline workflow so you don't have to write functions you've used before over and over.

Install it using `npm i vic-library`

## Functions:
(If you `ctrl+f` and find a few useful functions you might need, this library is great for you because it's not massive like the Lodash library, for example.)

### vic.clamp(number, lower, upper)
Takes <ins>3</ins> arguments:
* Integer
* Lower bound (Int)
* Upper bound (Int)
Returns:
* Integer
If the integer provided is smaller than the lower bound, the function returns the lower bound as the final number.

### vic.inRange(number, start, end)
Takes <ins>3</ins> arguments:
* Integer
* Start value (Int)
* End value (Int)
Returns:
* Boolean
Checks the provided integer is withing range of start value and end value. If outside of provided range, the function returns a value of `false`.
**NOTE** If no end value is proved, start value becomes `0` and provided start value becomes end value. If the start value is larger than the end value, the function will swap the values. This functionality is provided as a fail-safe should the user pass in incorrect arguments.

### vic.words(string)
Takes <ins>1</ins> argument:
* String
Returns:
* Array
Splits long strings into an array of each word found in the original string. 

### vic.pad(string, length)
Takes <ins>2</ins> arguments:
* String
* Length (Int)
Returns:
* String
Adds padding (spaces) to each side of the array to meet the desired length provided.

### vic.translateToWhaleTalk(string)
Takes <ins>1</ins> argument:
* String
Returns
* String
Translate given string into a whale-intelligable language. `e` and `u` found inside the string will be double. Filters out consonants. Returned string will be in all capitals.

### vic.has(object, key)
Takes <ins>2</ins> arguments:
* Object
* Key
Returns:
* Boolean
Returns `true` if provided object contains the key and the key contains a value. Returns false if the provided object does not contain the provided key or the key does not have a value.
**NOTE** Currently doesn't work with nested values

### vic.invert(object)
Takes <ins>1</ins> argument:
* Object
Returns:
* Object
Iterates through each key of the provided object and swaps the key and value. 
**NOTE** In the case of duplicate values in the object, subsequent values will overwrite property assignments of previous values.


### vic.findKey(object, predicate)
Takes <ins>2</ins> arguments:
* Object
* A predicate function (return Boolean)
Returns:
* Object.key
Iterates through each key / value pair and calls the provided predicate function to test the value at its corresponding key. Returns the first key with a truthy value. Returns `undefined` if no key is truthy. 

### vic.drop(array, number)
Takes <ins>2</ins> arguments:
* Array
* Integer
Returns
* Array
Removes a value from an array at a given value.

### vic.dropWhile(array, predicate)
Takes <ins>2</ins> arguments:
* Object
* A predicate function (takes 3 args: current index, current element index, and the provided array)
Returns
* Array
Creates a new copy of the provided array, [dropping](#vicdroparray-number) elements from the beginning of the array until an element causes the predicate function to return a falsy value.

### vic.chunk(array, size)
Takes <ins>2</ins> arguments:
* Array
* Size (Int)
Returns:
* Array
Disjunction the provided array into an array of arrays at the provided size.
**NOTE** If the array cannot be broken up evenly, the last array chunk will be truncated to math the provided size argument.
**NOTE** If no size is supplied, it's value will be set to `1`.

## vic.romanToInt(string)
Takes <ins>1</ins> argument:
* String
Returns:
* Integer
Converts a given roman numeral as a string and returns the corresponding integer. The European Spanish language uses a lot of roman numerals so this is useful in translation scenarios.

## vic.priceFormat(number)
Takes <ins>1</ins> argument:
* Integer
Returns:
* String
Formats a given integer into a string with the appropriate decimals, commas, and dollar sign. Currently configured to USD. 