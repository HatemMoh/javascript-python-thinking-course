        // // program 1 : if else
// let temperature = -14;

// if (temperature > 28) {
//     console.log('hot')
// } else if (temperature >= 15) {
//     console.log('nice')
// } else if (temperature >= 10) {
//     console.log('chelly')
// } else {
//     console.log('cold')
// }


        // // program 2 : loop
// let sum = 0;
// for (let i = 1; i < 11; i++) {
//     sum = sum + i
// }
// console.log(sum)


        // // program 3 : loop advanced
// let sum2 = 0;
// for (let i = 1; i < 11; i++) {
//     if (i%2 == 0) {
//         sum2 = sum2 + i
//     } else {
//         continue;
//     }
// }
// console.log(sum2)


        // // while
// let i = 1
// let sum3 = 0
// while (i < 11) {
//     sum3 = sum3 + i
//     i++
// }
// console.log(sum3)


        // // while even
// let j = 1
// let sum4 = 0
// while (j < 11) {
//     if (j%2 == 0) {
//         sum4 = sum4 + j
//     }
//     j++
// }
// console.log(sum4)


        // // data structure
// let names = ['hatem' , 'mohamed' , 'warda' , 'nesreen']
// for (const name of names) {
//     console.log(name)
// }


        // // array with loop
// for (let j = 0; j < names.length; j++) {
//     console.log(names[j])
// }

        // case 1 sum & average on array
// let nums = [1,4,5,6,8,9,22]
// sum = 0
// let numLength = nums.length
// for (let i = 0; i < numLength; i++) {
//     sum+=nums[i]
// }
// console.log(sum)
// avarage = sum/numLength
// console.log(avarage)


        // object
person1 = {
    "name":"Hatem",
    "city" :"15May",
    "job" : "Software Developer",
    "age" : "2024",
    "married" : false
}
person2 = {
    "name":"omHatem",
    "city" :"15May",
    "job" : "Teacher",
    "age" : "1973",
    "married" : false
}
console.log(person1.job)
persons= [person1,person2]
console.log(persons[1].job)