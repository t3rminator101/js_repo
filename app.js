// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//   const values = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   }

//   let num = 0;
//   const arr = s.split('')

//   arr.map((i) => num += values[i])

//   return num
// };

// console.log(romanToInt(''))





/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {

  if (n <= 0) {
    return arr
  }
  
  let resp = flat(arr, n - 1)
  
  arr = []

  for (let i = 0; i < resp.length; i++) {
    if (typeof resp[i] === 'object') {
      for (let j = 0; j < resp[i].length; j++) {
        arr.push(resp[i][j])
      }
    } else {
      arr.push(resp[i])
    }
  }

  // arr = resp.map((i) => {
  //   if (typeof i === 'object') {
  //     console.log('arr: ', i)

      
  //   }

  //   return i
  // })

  return arr
}


const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n = 3


console.log(flat(arr, n))