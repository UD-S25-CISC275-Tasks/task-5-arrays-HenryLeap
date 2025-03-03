//NO LOOPS, NO RECURSION, NO .PUSH (USE ...)

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((value: number): number => {
        return value * 3;
    });
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((value: string): number => {
        if (typeof +value === "undefined" || isNaN(+value)) {
            return 0;
        } else {
            return +value;
        }
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((value: string): number => {
        if (value[0] === "$") {
            value = value.slice(1);
        }
        if (typeof +value === "undefined" || isNaN(+value)) {
            return 0;
        } else {
            return +value;
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.filter((message: string): boolean => {
        return message[message.length - 1] !== "?";
    });
    return messages.map((message: string): string => {
        if (message[message.length - 1] === "!") {
            return message.toUpperCase();
        } else {
            return message;
        }
    });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let newWords = words.filter((word: string): boolean => {
        return word.length < 4;
    });
    return newWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let newColors: string[] = colors.filter((color: string): boolean => {
        return color === "red" || color === "green" || color === "blue";
    });
    return newColors.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let operation;
    if (addends.length === 0) {
        operation = 0;
    } else {
        operation = addends.join("+");
    }
    let result = addends.reduce((tally: number, num: number): number => {
        return tally + num;
    }, 0);
    return `${result}=${operation}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negativeFound = false;
    let valueSum = values.reduce((tally: number, num: number): number => {
        if (!negativeFound && num > 0) {
            return tally + num;
        } else {
            negativeFound = true;
            return tally;
        }
    }, 0);
    let negativeIndex = values.findIndex((num: number): boolean => {
        return num < 0;
    });
    if (negativeIndex === -1) {
        return [...values, valueSum];
    } else {
        let newValues = [...values];
        newValues.splice(negativeIndex + 1, 0, valueSum);
        return newValues;
    }
}
