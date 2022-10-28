/*
    Write a function 'solution' that, given integer N, returns the smallest non-negative integer whose individual digits sum to N.

    Examples:

    1. Given N = 16, the function should return 79. There are many numbers whose digits sum to 16 (for example: 79, 97, 808, 22822, etc).
     The smallest such number is 79.

    2. Given N = 19, the function should return 199 (the sum of digits is 1 + 9 + 9 = 19).

    3. Given N = 7, the function should return 7.

    Assume that:

    - N is an integer within the range [0..50].

    In your solution, focus on 'correctness.' The performance of your solution will not be the focus of the assessment.
 */

function sumDigits (num) {
    const newNum = num + '';
    let sum = 0;

    for (let i = 0; i < newNum.length; i = i + 1) {
        sum = sum + parseInt(newNum[i], 10);
    }

    return sum;
}

function findDigitCount (target) {
    return Math.ceil(target/9);
}

function findSmallestStartNum (target) {
    const digitCount = findDigitCount(target);

    if (digitCount === 0) {
        return 0;
    }

    return Math.pow(10, digitCount - 1);
}

function solution (target, prefix = '') {
    let num = findSmallestStartNum(target);
    while (sumDigits(num) !== target) {
        num = num + 1;
    }

    return num;
}

function runTest(arg, expected) {
    console.log(`expect ${expected}=>`, solution(arg));
}

runTest(1, 1);
runTest(2, 2);
runTest(10, 19);
runTest(11, 29);
runTest(16, 79);
runTest(19, 199);
runTest(30, 3999);
runTest(50, 599999);

/*
TODO: Can optimize more, possibly with better prediction of outcome, by dividing by 9 to determine how many digits,  then adding 9 to the end of the final digit and subtracting target by 9. Keep adding 9 until you get the smallest number on the 1st digit.
*/