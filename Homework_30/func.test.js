const functions = require("./func");
let a = new Array(13, 22, 31, 4, 5, 16, 7, 8, 9, 10);
let isPassed = true;
let accumulator = new functions.Accumulator(20);
let spyLogger = jest.spyOn(functions,'triangle');
functions.triangle();
functions.triangle();
describe('Several tests', function () {
    it('checkArray', function () {
        expect(functions.checkArray(a, isPassed)).toBe(125);
    });

    it('bubbleSort', function () {
        expect(functions.bubbleSort(a, isPassed)).toContain(31);
        expect(functions.bubbleSort(a, isPassed)).toContain(4);
    });

    it('accumulator', function () {
        expect(accumulator.increment()).toBe(21);
        expect(accumulator.decrement()).toBe(20);
    });

    it('triangle',function() {
        expect(spyLogger.mock.calls).toHaveLength(2);
    })
});
