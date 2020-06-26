"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Box = function Box(props) {
  var style = {};

  if (props.style) {
    style = _objectSpread({}, props.style);
  }

  if (props.row) {
    style.flexDirection = 'row';
  } else if (props.col) {
    style.flexDirection = 'col';
  }

  if (props.justify) {
    switch (props.justify) {
      case 'start':
        style.justifyContent = 'flex-start';
        break;

      case 'end':
        style.justifyContent = 'flex-end';
        break;

      case 'center':
        style.justifyContent = 'center';
        break;

      case 'between':
        style.justifyContent = 'space-between';
        break;

      case 'around':
        style.justifyContent = 'space-around';
        break;
    }
  }

  if (props.align) {
    switch (props.align) {
      case 'start':
        style.alignItems = 'flex-start';
        break;

      case 'end':
        style.alignItems = 'flex-end';
        break;

      case 'center':
        style.alignItems = 'center';
        break;

      case 'stretch':
        style.alignItems = 'stretch';
        break;
    }
  }

  if (props.self) {
    switch (props.self) {
      case 'start':
        style.alignSelf = 'flex-start';
        break;

      case 'end':
        style.alignSelf = 'flex-end';
        break;

      case 'center':
        style.alignSelf = 'center';
        break;

      case 'stretch':
        style.alignSelf = 'stretch';
        break;
    }
  }

  if (props.wrap) {
    style.flexWrap = 'wrap';
  }

  if (props.flex) style.flex = props.flex;
  if (props.width) style.width = props.width;
  if (props.height) style.height = props.height;

  if (props.pad) {
    if (Array.isArray(props.pad)) {
      switch (props.pad.length) {
        case 1:
          style.padding = props.pad[0];
          break;

        case 2:
          style.paddingVertical = props.pad[0];
          style.paddingHorizontal = props.pad[1];
          break;

        case 4:
          style.paddingTop = props.pad[0];
          style.paddingBottom = props.pad[1];
          style.paddingLeft = props.pad[2];
          style.paddingRight = props.pad[3];
          break;
      }
    } else {
      style.padding = props.pad;
    }
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: props.id ? props.id : null,
    className: props.className ? props.className : null,
    style: style
  }, props.children);
};

var _default = Box;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _box = _interopRequireDefault(require("./box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _box["default"];
exports["default"] = _default;
