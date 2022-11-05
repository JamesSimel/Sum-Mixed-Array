## Sum Mixed Array
This is a [Codewars](https://www.codewars.com/) coding challenge always known as a *Kata*
# Description of the challenge:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

Tags: `FUNDAMENTALS` `STRINGS` `ARRAYS`

1. First Code
``` 
   function sumMix(x){
    let sum = 0
    let i = 0;
    for(i; i < x.length; i++) {
      if (x[i] === typeof NAN){
        continue
      } else {
       sum += Number(x[i])
      }
    }
    return sum;
}
```

2. Second Ways
```
    function sumMix(x){
        return console.log(x.map(a => a - 0).reduce((a, b) => a + b));
    }
```

3. Please let me see your way of solving this problem.
**Thank you :)**
