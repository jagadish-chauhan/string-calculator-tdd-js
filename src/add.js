/**
 * 
 * @param {string} numbers 
 * @returns 
 */
function add(numbers = "1,\n") {
    if (numbers === "") {
        return 0;
    }
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        delimiter = numbers[2];
        numbers = numbers.substring(4);
    }
    const numList = splitNumbers(numbers, delimiter + "|\n");
    return sum(numList);
}

/**
 * 
 * @param {string} num 
 * @returns 
 */
const convertToInt = (num) => {
    return parseInt(num);
}

/**
 * 
 * @param {string} numbers 
 * @param {string} delimiter 
 * @returns string[]
 */
function splitNumbers(numbers, delimiter) {
    return numbers.split(new RegExp(delimiter));
}

/**
 * 
 * @param {string[]} numbers 
 * @returns 
 */
function sum(numbers) {
    let total = 0;
    let negativeString = [];

    numbers.forEach((number) => {
        let num = convertToInt(number.trim());
        if (num < 0) {
            negativeString.push(num);
        }
        total += num;
    })

    if (negativeString.length > 0) {
        throw new Error(`Negatives not allowed: ${negativeString.join(",")}`);
    }

    return total;
}


module.exports = add;