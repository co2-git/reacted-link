'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redtea = require('redtea');

var _redtea2 = _interopRequireDefault(_redtea);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _css = require('css');

var _css2 = _interopRequireDefault(_css);

var _xmldom = require('xmldom');

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _link = require('./components/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test() {
  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var locals = {};

  function getDOMNode(props) {
    var rendered = _server2.default.renderToString(_react2.default.createFactory(_link2.default)(props));

    return new _xmldom.DOMParser().parseFromString(rendered, 'text/html');
  }

  return (0, _redtea2.default)('reacted-link', function (it) {
    it('should be a class', function () {
      return _link2.default.should.be.a.Function();
    });

    it('<Link href="/foo" />', function (it) {
      it('should be a <a>', function () {
        locals.domNode = getDOMNode({ href: '/foo' }).documentElement;

        locals.domNode.tagName.should.be.exactly('a');
      });

      it('should have href', function (it) {
        var href = undefined;

        for (var i in locals.domNode.attributes) {
          if (locals.domNode.attributes[i].name === 'href') {
            href = locals.domNode.attributes[i].value;
          }
        }

        it('should be href', function () {
          return (0, _should2.default)(href).be.a.String();
        });

        it('should be the correct URI', function () {
          return href.should.be.exactly('/foo');
        });
      });
    });

    it('<Link to="/foo" />', function (it) {
      it('should be a <a>', function () {
        locals.domNode = getDOMNode({ to: '/foo' }).documentElement;

        locals.domNode.tagName.should.be.exactly('a');
      });

      it('should have href', function (it) {
        var href = undefined;

        for (var i in locals.domNode.attributes) {
          if (locals.domNode.attributes[i].name === 'href') {
            href = locals.domNode.attributes[i].value;
          }
        }

        it('should be href', function () {
          return (0, _should2.default)(href).be.a.String();
        });

        it('should be the correct URI', function () {
          return href.should.be.exactly('/foo');
        });
      });
    });
  });
}

exports.default = test;