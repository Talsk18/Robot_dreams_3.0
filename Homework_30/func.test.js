const functions = require("./func");
let a = new Array(13, 22, 31, 4, 5, 16, 7, 8, 9, 10);
let isPassed = true;
let accumulator = new functions.Accumulator(20);

describe('Several tests', function () {
    it('checkArray', function () {
        expect(functions.checkArray(a, isPassed)).toBeDefined();
    });

    it('bubbleSort', function () {
        expect(functions.bubbleSort(a, isPassed)).toContain(31);
        expect(functions.bubbleSort(a, isPassed)).toContain(4);
    });

    it('accumulator', function () {
        expect(accumulator.increment()).toBe(21);
        expect(accumulator.decrement()).toBe(20);
    });
});