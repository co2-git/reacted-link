'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'go',
    value: function go(e) {
      var _this2 = this;

      e.preventDefault();

      Link.go(this.props.to || this.props.href).then(function () {
        if (_this2.props.onClick) {
          _this2.props.onClick(e);
        }

        if (_this2.props.then) {
          _this2.props.then(e);
        }
      });
    }
  }, {
    key: 'handler',
    value: function handler(e) {
      console.log('heloooooooooooooooooooooooooooo');
      e.preventDefault();
      this.go(e.target.href);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        _extends({}, this.props, {
          href: this.props.href || this.props.to || '',
          onClick: this.handler.bind(this)
        }),
        'hahaha',
        this.props.children
      );
    }
  }], [{
    key: 'go',
    value: function go(link) {
      window.history.pushState(null, null, link);
    }
  }]);

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  "href": _react2.default.PropTypes.string,
  "to": _react2.default.PropTypes.string
};
exports.default = Link;