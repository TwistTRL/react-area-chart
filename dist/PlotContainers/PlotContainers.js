"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlotSubContainer = exports.PlotContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _memoize = require("memoize");

require("./PlotContainers.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlotContainer = /*#__PURE__*/function (_Component) {
  _inherits(PlotContainer, _Component);

  var _super = _createSuper(PlotContainer);

  function PlotContainer() {
    var _this;

    _classCallCheck(this, PlotContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "generateGridLayoutStyle", (0, _memoize.memoize_one)(function (width, height, leftWidth, plotWidth, rightWidth, topHeight, plotHeight, bottomHeight) {
      var style = {
        display: "grid",
        height: height,
        width: width,
        gridGap: 0,
        gridTemplateColumns: "".concat(leftWidth, "px ").concat(plotWidth, "px ").concat(rightWidth, "px"),
        gridTemplateRows: "".concat(topHeight, "px ").concat(plotHeight, "px ").concat(bottomHeight, "px")
      };
      return style;
    }));

    return _this;
  }

  _createClass(PlotContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          width = _this$props.width,
          height = _this$props.height,
          leftWidth = _this$props.leftWidth,
          plotWidth = _this$props.plotWidth,
          rightWidth = _this$props.rightWidth,
          topHeight = _this$props.topHeight,
          plotHeight = _this$props.plotHeight,
          bottomHeight = _this$props.bottomHeight;
      var style = this.generateGridLayoutStyle(width, height, leftWidth, plotWidth, rightWidth, topHeight, plotHeight, bottomHeight);
      return /*#__PURE__*/_react.default.createElement("div", {
        style: style,
        className: "PlotContainers-positionRelative"
      }, children);
    }
  }]);

  return PlotContainer;
}(_react.Component);

exports.PlotContainer = PlotContainer;

var PlotSubContainer = function PlotSubContainer(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PlotContainers-positionRelative"
  }, props.children ? _react.default.Children.map(props.children, function (child) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "PlotContainers-positionAbsolute"
    }, child);
  }) : null);
};

exports.PlotSubContainer = PlotSubContainer;