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

test('title', t => {
  t.ok(piy.print('myArg1'));
});
