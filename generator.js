function* randomColors(a){
  yield a;
  yield 2 * a;
  yield 3 * a;
  yield 4 * a;
}

var colors = randomColors(1);

console.log(colors.next());
console.log(colors.next());
console.log(colors.next());
console.log(colors.next());
console.log(colors.next());

var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
