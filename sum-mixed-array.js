//array containing number and strings
//eg let array1 = [1, "names"]
//get the sum if all were number

//First Way, though it looks long :)
// function sumMix(x){
//     let sum = 0
//     let i = 0;
//     for(i; i < x.length; i++) {
//       if (x[i] === typeof NAN){
//         continue
//       } else {
//        sum += Number(x[i])
//       }
//     }
//     return sum;
// }

function sumMix(x){
  return console.log(x.map(a => a - 0).reduce((a, b) => a + b));
}