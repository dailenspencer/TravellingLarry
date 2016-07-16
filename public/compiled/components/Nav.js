'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

  var styles = {
    tabs: {
      width: '100%'
    }
  };

  return _react2.default.createElement(_materialUi.AppBar, { title: 'Title', titleStyle: { textAlign: "center" } });
};