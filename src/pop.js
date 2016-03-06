'use strict';
module.exports = function (arr, i) {
  const argLength = arguments.length;

  if (argLength !== 2) {
    throw new Error(`Expected 2 arguments, got ${argLength}`);
  }

  return arguments[0].splice(i, 1);
};
