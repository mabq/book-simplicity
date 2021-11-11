import array_utilities from './modules/array_utilities.js';
import composition from './modules/composition.js';

const { map, sequentialWindowSlicer, sequentialAverage } = array_utilities;
const { pipe, identity } = composition;

const myArray = [1, 2, 3, 4, 5];

// console.log(sequentialWindowSlicer(3)(myArray));

// console.log(sequentialAverage(identity)(myArray));

const x = pipe(sequentialWindowSlicer(3), map(sequentialAverage(identity)));

console.log(x(myArray));

// function averageWindow(array, window) {
//     const answer = [];
//     let sum, count, idx;
//     for (let i = 0; i < array.length; i += 1) {
//         sum = 0;
//         count = 0;
//         for (let j = 0; j < window; j += 1) {
//             idx = i + j;
//             if (idx < array.length) {
//                 sum += array[idx];
//                 count += 1;
//             }
//             answer.push(sum / count);
//         }
//     }
//     return answer;
// }

// console.log(averageWindow(myArray, 3));
