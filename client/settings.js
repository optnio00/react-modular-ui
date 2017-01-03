'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
  function Settings() {
    _classCallCheck(this, Settings);

    this.prefix = 'c-';
    this.classes = {
      block: '{b}',
      element: '{b}--{e}',
      blockModifier: '-{m}',
      blockModifierWithValue: '-{mk}-{mv}',
      elementModifier: '-{m}',
      elementModifierWithValue: '-{mk}-{mv}'
    };
  }

  _createClass(Settings, [{
    key: 'getClasses',
    value: function getClasses() {
      return this.classes;
    }
  }, {
    key: 'setClasses',
    value: function setClasses(classes) {
      this.classes = classes;
    }
  }, {
    key: 'getPrefix',
    value: function getPrefix() {
      return this.prefix;
    }
  }, {
    key: 'setPrefix',
    value: function setPrefix(prefix) {
      this.prefix = prefix;
    }
  }]);

  return Settings;
}();

exports.default = new Settings();