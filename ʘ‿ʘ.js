(function (self) {
  "use strict";
  if ((typeof console !== 'undefined') && (typeof console.info === 'function')) {
    var info = window.console.info;
    self['ʘ‿ʘ'] = Function.prototype.bind.call(info, console);
    window.console.info = undefined;
  } else {
    self['ʘ‿ʘ'] = function () {}
  }
}(typeof window !== 'undefined'? window : typeof global !== 'undefined' ? global : self));
