'use strict';

var data = [[]];
console.log('START');
for (var i = 1; i <= 1000; i++) {
    data.push(Collatz.iterate(i));
}
console.log('END');
