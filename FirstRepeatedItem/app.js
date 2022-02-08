function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined
}
// Using hash tables
// function firstRecurringCharacter2(input) {
//     let map = {};
//     for (let i = 0; i < input.length; i++) {
//         if (map[input[i]] !== undefined) {
//             return input[i]
//         } else {
//             map[input[i]] = i;
//         }
//     }
//     return undefined
// }

console.log(firstRecurringCharacter([1,5,5,1,3,4,6]));