// duplicate array using store new array

// let array = [100,4,5,5,6,7,100,8,9,4];
// function duplicateNum(array) {
//     let arrayNum = [],arr1=[];
//     for (i = 0; i < array.length; i++) {
//         let exit = false;
//         for (j = 0; j < arrayNum.length; j++) {
//             if (array[i] === arrayNum[j]) {
//                 arr1.push(array[i]);
//                // arrayNum.push(array[i]);
//                 exit = true;
//                 break;
                
//             }
//         }
//         if (!exit) {
//             arrayNum.push(array[i]);
//         }
//     }
//     return arr1;
//     // console.log(arr1);
// }
// console.log(duplicateNum(array));



// simple type

let array1 = [1,2,3,2,3,4,5,5];
function dupicate(array1){
    let array2=[];
    for (let i = 0; i < array1.length; i++) {
        for (let j = i+1; j < array1.length; j++) {
            if (array1[i] === array1[j]) {
                array2.push(array1[i]);
            }
        } 
    }
    return array2;
}
console.log(dupicate(array1));







