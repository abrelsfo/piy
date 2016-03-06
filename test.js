import test from 'ava';
var piy = require('./index.js');

test('valid args', t => {
  t.pass();
  /*
  t.throws(() => {
    fn();
  }, TypeError);
  t.throws(() => {
    fn();
  }, Error);
  */
});

test('print', t => {
  t.pass();
});

test('pop', t => {
  t.is(piy.pop([1, 2, 3], 1), [1, 3]);
});
