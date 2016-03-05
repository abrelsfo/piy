'use strict';
module.exports = function () {
  const argLength = arguments.length;
  /*
  if (typeof arg1 !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof arg1}`);
  }
  */
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }

  return `${arguments[0]} & ${argLength}`;
};
