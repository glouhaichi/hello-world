'use strict';

var Collatz = (function () {

    /**
     * generates the next iterate from the Collatz conjecture
     * @param {Number} n
     * @return {Number} next n
    **/
    var next = function (n) {
        if (n % 2 === 0) {
            return n/2;
        }
        return 3*n+1;
    };

    /**
     * iterate over the given argument until 1 is reached
     * @param {Number} n
     * @return {Number} list of steps
    **/
    var iterate = function (n) {
        var list = [], result = n;
        while (result !== 1) {
            result = next(result);
            list.push(result);
        }
        return list;
    };

    return {
        next: next,
        iterate: iterate
    };

})();
