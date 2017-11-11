import service1 from './services/service1.js';
import service2 from './services/service2.js';
import temp from './services/temp/index.js';

(function() {
  function fib(x) {
    return x <= 1 ? x : fib(x - 1) + fib(x - 2);
  }

  let x = Date.now();
  if (x * 2 > 42) x = fib(10);
  global.result = x;
})();

console.log(service1);
const a = JSON.stringify(service1);
console.log(a);
console.log(service2);
console.log(temp);
console.log(service2 === temp);

