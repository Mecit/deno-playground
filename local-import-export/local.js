import { cartesianProduct } from './cartesian.js'

const first = ['a', 'b', 'c']
const second = ['x', 'y', 'z']

// Expected output:
// [
//     [ "a", "x" ],
//     [ "a", "y" ],
//     [ "a", "z" ],
//     [ "b", "x" ],
//     [ "b", "y" ],
//     [ "b", "z" ],
//     [ "c", "x" ],
//     [ "c", "y" ],
//     [ "c", "z" ]
//   ]  
console.log(cartesianProduct(first, second))