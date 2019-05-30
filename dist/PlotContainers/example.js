"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PlotContainers = require("../PlotContainers/PlotContainers");

var _BloodPressurePlot = _interopRequireDefault(require("../BloodPressurePlot/BloodPressurePlot"));

var _BloodPressurePanel = _interopRequireDefault(require("../BloodPressurePlot/BloodPressurePanel"));

var _BloodPressuresHorizontalSlabGrid = _interopRequireDefault(require("../BloodPressurePlot/BloodPressuresHorizontalSlabGrid"));

var _DynamicDateYAxisTwoLevelPanel = _interopRequireDefault(require("../DateXAxis/DynamicDateYAxisTwoLevelPanel"));

var _DateXAxis = _interopRequireDefault(require("../DateXAxis/DateXAxis"));

var _DateVerticalGridLines = _interopRequireDefault(require("../DateXAxis/DateVerticalGridLines"));

var _PlotInteractionBoxProvider = _interopRequireDefault(require("../Interaction/PlotInteractionBoxProvider"));

var _VerticalCrosshair = _interopRequireDefault(require("../VerticalCrosshair/VerticalCrosshair"));

var _VerticalCrosshairSelector = _interopRequireDefault(require("../VerticalCrosshair/VerticalCrosshairSelector"));

var _GradientOverlay = _interopRequireDefault(require("../UtilityComponents/GradientOverlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var minY = 0;
var maxY = 200;
var LEFT_WIDTH = 150;
var RIGHT_WIDTH = 0;
var TOP_HEIGHT = 30;
var BOTTOM_HEIGHT = 0;

var BloodPressurePlotBundle =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BloodPressurePlotBundle, _PureComponent);

  function BloodPressurePlotBundle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BloodPressurePlotBundle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BloodPressurePlotBundle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "updateVerticalCrosshairX", function (VCX) {
      var changeHandler = _this.props.changeHandler;
      changeHandler({
        verticalCrosshair_X: VCX
      });
    });

    return _this;
  }

  _createClass(BloodPressurePlotBundle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          DBP = _this$props.DBP,
          MBP = _this$props.MBP,
          SBP = _this$props.SBP,
          width = _this$props.width,
          minX = _this$props.minX,
          maxX = _this$props.maxX,
          height = _this$props.height,
          verticalCrosshair_X = _this$props.verticalCrosshair_X;
      var changeHandler = this.props.changeHandler;
      var plotWidth = width - LEFT_WIDTH - RIGHT_WIDTH;
      var plotHeight = height - TOP_HEIGHT - BOTTOM_HEIGHT;
      return _react.default.createElement(_PlotContainers.PlotContainer, {
        width: width,
        height: height,
        leftWidth: LEFT_WIDTH,
        plotWidth: plotWidth,
        rightWidth: RIGHT_WIDTH,
        topHeight: TOP_HEIGHT,
        plotHeight: plotHeight,
        bottomHeight: BOTTOM_HEIGHT
      }, _react.default.createElement(_PlotContainers.PlotSubContainer, null, _react.default.createElement(_DynamicDateYAxisTwoLevelPanel.default, {
        minX: minX,
        maxX: maxX,
        width: LEFT_WIDTH,
        height: TOP_HEIGHT
      })), _react.default.createElement(_PlotContainers.PlotSubContainer, null, _react.default.createElement(_DateXAxis.default, {
        minX: minX,
        maxX: maxX,
        height: TOP_HEIGHT,
        width: plotWidth,
        position: "x1"
      })), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null, _react.default.createElement(_BloodPressurePanel.default, {
        height: plotHeight,
        width: LEFT_WIDTH
      })), _react.default.createElement(_PlotContainers.PlotSubContainer, null, _react.default.createElement(_BloodPressuresHorizontalSlabGrid.default, {
        height: plotHeight,
        width: plotWidth,
        minY: minY,
        maxY: maxY
      }), _react.default.createElement(_DateVerticalGridLines.default, {
        height: plotHeight,
        width: plotWidth,
        minX: minX,
        maxX: maxX
      }), _react.default.createElement(_BloodPressurePlot.default, {
        DBP: DBP,
        MBP: MBP,
        SBP: SBP,
        width: plotWidth,
        minX: minX,
        maxX: maxX,
        height: plotHeight,
        minY: minY,
        maxY: maxY
      }), _react.default.createElement(_VerticalCrosshair.default, {
        X: verticalCrosshair_X,
        minX: minX,
        maxX: maxX,
        width: plotWidth,
        height: plotHeight
      }), _react.default.createElement(_PlotInteractionBoxProvider.default, {
        width: plotWidth,
        height: plotHeight,
        render: function render(_ref) {
          var hoveringPosition = _ref.hoveringPosition,
              clickPosition = _ref.clickPosition,
              doubleClickPosition = _ref.doubleClickPosition,
              selectingPositionStart = _ref.selectingPositionStart,
              selectingPositionEnd = _ref.selectingPositionEnd,
              selectedPositionStart = _ref.selectedPositionStart,
              selectedPositionEnd = _ref.selectedPositionEnd,
              panningPositionStart = _ref.panningPositionStart,
              panningPositionEnd = _ref.panningPositionEnd,
              pannedPositionStart = _ref.pannedPositionStart,
              pannedPositionEnd = _ref.pannedPositionEnd;
          return _react.default.createElement("div", null, _react.default.createElement(_VerticalCrosshairSelector.default, {
            hoveringPosition: hoveringPosition,
            selectHandler: _this2.updateVerticalCrosshairX,
            minX: minX,
            maxX: maxX,
            width: plotWidth
          }));
        }
      })), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_GradientOverlay.default, {
        style: {
          position: "absolute",
          width: 10,
          height: height,
          left: LEFT_WIDTH,
          top: 0
        }
      }));
    }
  }]);

  return BloodPressurePlotBundle;
}(_react.PureComponent);

var _default = BloodPressurePlotBundle;
exports.default = _default;