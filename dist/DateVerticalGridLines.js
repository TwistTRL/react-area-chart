"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _bisect = require("bisect");

var _plotUtils = require("plot-utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var DateVerticalGridLines = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateVerticalGridLines, _PureComponent);

  var _super = _createSuper(DateVerticalGridLines);

  function DateVerticalGridLines(props) {
    var _this;

    _classCallCheck(this, DateVerticalGridLines);

    _this = _super.call(this, props);
    _this.ref = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(DateVerticalGridLines, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          minX = _this$props.minX,
          maxX = _this$props.maxX,
          rest = _objectWithoutProperties(_this$props, ["width", "height", "minX", "maxX"]);

      return /*#__PURE__*/_react.default.createElement("canvas", _extends({
        ref: this.ref,
        width: width,
        height: height
      }, rest), " ");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.draw();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$props2 = this.props,
          minX = _this$props2.minX,
          maxX = _this$props2.maxX,
          width = _this$props2.width;
      var diffX = maxX - minX; // Generate grid if needed

      this.draw_memo = this.draw_memo || {
        validFromDiffX: 0,
        validToDiffX: -1,
        rangeMinX: 0,
        rangeMaxX: -1
      };
      var memo = this.draw_memo;

      if (memo.validFromDiffX > diffX || diffX > memo.validToDiffX || memo.rangeMinX > minX || maxX > memo.rangeMaxX) {
        memo.rangeMinX = minX - 10 * diffX;
        memo.rangeMaxX = maxX + 10 * diffX;

        var _generateDateGrids = (0, _plotUtils.generateDateGrids)(minX, maxX, memo.rangeMinX, memo.rangeMaxX),
            grids = _generateDateGrids.grids,
            validFromDiffX = _generateDateGrids.validFromDiffX,
            validToDiffX = _generateDateGrids.validToDiffX;

        memo.validFromDiffX = validFromDiffX;
        memo.validToDiffX = validToDiffX;
        memo.grids = grids;
      } // Filter


      var startIndex = Math.max(0, (0, _bisect.bisect_right)(memo.grids, minX));
      var endIndex = Math.min(memo.grids.length - 1, (0, _bisect.bisect_left)(memo.grids, maxX));
      var domXs = memo.grids.slice(startIndex, endIndex + 1).map(function (x) {
        return (0, _plotUtils.toDomXCoord_Linear)(width, minX, maxX, x);
      }); // Draw

      var canvas = this.ref.current;
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, 400);
      ctx.globalAlpha = 0.1;
      this.verticalLinePlot(ctx, width, 400, domXs);
    }
  }, {
    key: "verticalLinePlot",
    value: function verticalLinePlot(ctx, width, height, domXs) {
      var x = null;
      var c = null;
      ctx.beginPath();

      for (var i = 0; i < domXs.length; i++) {
        x = Math.round(domXs[i]);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      ctx.stroke();
    }
  }]);

  return DateVerticalGridLines;
}(_react.PureComponent);

var _default = DateVerticalGridLines;
exports.default = _default;