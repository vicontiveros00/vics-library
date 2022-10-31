const vic = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = 0;
        temp = end;
        end = start;
        start = temp;
      }
      let isInRange = false;
      if (start <= number && number < end) {
        isInRange = true;
      }
      return isInRange;
    },
    words(string) {
      let array = string.split(' ');
      return array;
    },
    pad(string, length) {
      if(string.length > length) {
        return string;
      }
      let startPaddingLength = Math.floor((length - string.length) / 2);
      let endPaddingLength = (length - string.length) - startPaddingLength;
      let paddedString = ' ';
      paddedString = paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
      return paddedString;
    },
    //this is here as a joke, what's up eetu
    translateToWhaleTalk(string) {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      let resultArray = [];
      for (let i = 0; i < string.length; i++) {
        if (string[i] === 'e') {
          resultArray.push('e');
        } else if (string[i] === 'u') {
          resultArray.push('u');
        } else {};
        for (let j = 0; j < vowels.length; j++) {
          if (string[i] === vowels[j]) {
            resultArray.push(vowels[j]);
          }
        }
      }
      return resultArray.join('').toUpperCase();
    },
    has(obj, key) {
      let hasValue = false;
      if (obj[key] !== undefined) {
        hasValue = true;
      }
      return hasValue;
    },
    invert(obj) {
      let invertedObj = {};
      for (let key in obj) {
        originalVal = obj[key];
        invertedObj[originalVal] = key;
      }
      return invertedObj;
    },
    findKey(obj, predicate) {
      for (let key in obj) {
        let val = obj[key];
        let predicateReturnValue = predicate(val);
        if(predicateReturnValue === true) {
          return key;
        }
      }
      return undefined;
    },
    drop(arr, n) {
      if (n === undefined) {
        n = 1;
      }
      let newArray = arr.slice(n);
      return newArray;
    },
    dropWhile(arr, predicate) {
      let dropNumber = arr.findIndex((element, index) => {
        return !predicate(element, index, arr)
      })
      let droppedArray = this.drop(arr, dropNumber);
      return droppedArray;
    },
    chunk(arr, num) {
      if(num === undefined) {
        num = 1;
      }
      let arrChunks = [];
      for(let i = 0; i < arr.length; i = i + num) {
        let arrChunk = arr.slice(i, i + num);
        arrChunks.push(arrChunk);
      }
      return arrChunks;
    },
    romanToInt(string) {
        const symbols = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
        let value = 0;
        for (let i = 0; i < string.length; i++) {
            if (symbols[string[i]] < symbols[s[i + 1]]) {
                value += symbols[s[i + 1]] - symbols[s[i]];
                i++;
            } else {
                value += symbols[[s[i]]];
            }
        }
        return value;
    },
    priceFormat(number) {
        return Intl.NumberFormat(
            'en-us',
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(number);
    }
  }
  
  module.exports = vic;