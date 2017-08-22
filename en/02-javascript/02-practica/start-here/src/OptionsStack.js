'use strict';
var Options = require('./Options');

function OptionsStack() {
  this._stack = [];
  Object.defineProperty(this, 'current', {
    get: function () {
      return this._stack[this._stack.length - 1];
    },
    set: function (v) {
      if (!(v instanceof Options)) {
        v = new Options(v);
      }
      return this._stack.push(v);
    }
  });
}

OptionsStack.prototype.select = function (id) {
  // Redirect the command to the last in the stack.
};

OptionsStack.prototype.list = function () {
  // Redirect the command to the last in the stack.
};

OptionsStack.prototype.get = function (id) {
  return this.current.get(id);
};

OptionsStack.prototype.cancel = function () {
  this._stack.pop();
};

OptionsStack.prototype.clear = function () {
  this._stack = [];
};

module.exports = OptionsStack;
