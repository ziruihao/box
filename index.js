"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Box = /*#__PURE__*/function (_React$Component) {
  _inherits(Box, _React$Component);

  var _super = _createSuper(Box);

  function Box(props) {
    _classCallCheck(this, Box);

    return _super.call(this, props);
  }

  _createClass(Box, [{
    key: "render",
    value: function render() {
      var style = {
        display: 'flex'
      };

      if (this.props.style) {
        style = _objectSpread({}, this.props.style);
      }

      if (this.props.row) {
        style.flexDirection = 'row';
      } else if (this.props.col) {
        style.flexDirection = 'col';
      }

      if (this.props.justify) {
        switch (this.props.justify) {
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

      if (this.props.align) {
        switch (this.props.align) {
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

      if (this.props.self) {
        switch (this.props.self) {
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

      if (this.props.wrap) {
        style.flexWrap = 'wrap';
      }

      if (this.props.flex) style.flex = this.props.flex;
      if (this.props.width) style.width = this.props.width;
      if (this.props.height) style.height = this.props.height;

      if (this.props.pad) {
        if (Array.isArray(this.props.pad)) {
          switch (this.props.pad.length) {
            case 1:
              style.padding = this.props.pad[0];
              break;

            case 2:
              style.paddingVertical = this.props.pad[0];
              style.paddingHorizontal = this.props.pad[1];
              break;

            case 4:
              style.paddingTop = this.props.pad[0];
              style.paddingBottom = this.props.pad[1];
              style.paddingLeft = this.props.pad[2];
              style.paddingRight = this.props.pad[3];
              break;
          }
        } else {
          style.padding = this.props.pad;
        }
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        id: this.props.id ? this.props.id : null,
        className: this.props.className ? this.props.className : null,
        style: style
      }, this.props.children);
    }
  }]);

  return Box;
}(_react["default"].Component);

exports["default"] = Box;
