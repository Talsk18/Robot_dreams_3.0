//1
let a = new Array(13, 22, 31, 4, 5, 16, 7, 8, 9, 10);
let isPassed = true;
//2
let functions = {
    checkArray: function (a, isPassed) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            if (typeof a[i] === "number") {
                sum += a[i];
            } else {
                alert("There's not a number in the array");
                isPassed = false;
                break;
            }
        }
        if (isPassed === true) {
            return sum;
        } else {
            return undefined;
        }
    },
    bubbleSort: function (a, isPassed) {
        if (isPassed === true) {
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a.length - i - 1; j++) {
                    if (a[j] > a[j + 1]) {
                        var temp = a[j];
                        a[j] = a[j + 1];
                        a[j + 1] = temp;
                    }
                }
            }
            max = a[a.length - 1];
            min = a[a.length - a.length];
            return [max, min];
        }
    },
    Accumulator: function (number) {
        this.number = number;
        this.increment = function () {
            this.number++;
            return this.number;
        };
        this.decrement = function () {
            this.number--;
            return this.number;
        };
    }

}

module.exports = functions