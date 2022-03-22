console.log('------------- #5');
console.log(6+7);
console.log(6-7);
console.log(6*7);
console.log(6/7);

console.log('------------- #6');
console.log('1 2 3 4 5');

console.log('------------- #7');
console.log('5 4 3 2 1');

console.log('------------- #8');
function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У вас максимальный балл');
    } else {
        console.log('У вас средний балл');
    }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('------------- #9');
function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data')
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)

console.log('------------- #10');
let array = ['a', 'b', 'c'];
array.push(1, 2, 3);
console.log(array);

console.log('------------- #11');
let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
let arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree);

console.log('------------- #12');
function countNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;       
    }
    console.log(sum);
}
countNumber(3)