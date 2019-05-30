"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PlotContainers = require("./PlotContainers/PlotContainers");

var _AreaChartLeftPanel = _interopRequireDefault(require("./AreaChartLeftPanel"));

var _AreaChart = _interopRequireDefault(require("./AreaChart"));

var _AreaChartYAxis = _interopRequireDefault(require("./AreaChartYAxis"));

var _DateVerticalGridLines = _interopRequireDefault(require("./DateVerticalGridLines"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var minY = 0;
var maxY = 200;
var LEFT_WIDTH = 200;
var RIGHT_WIDTH = 0;
var TOP_HEIGHT = 0;
var BOTTOM_HEIGHT = 0;

var AreaChartBundle =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AreaChartBundle, _PureComponent);

  function AreaChartBundle() {
    _classCallCheck(this, AreaChartBundle);

    return _possibleConstructorReturn(this, _getPrototypeOf(AreaChartBundle).apply(this, arguments));
  }

  _createClass(AreaChartBundle, [{
    key: "filterDataToDtWindow",
    value: function filterDataToDtWindow(data) {
      var minX = this.props.dtWindow[0] / 1000;
      var maxX = this.props.dtWindow[1] / 1000;
      var filteredData = data;
      var timeSet = new Set();
      var timeArr = [];

      if (data) {
        if (minX) {
          // filter out the data that is within the dtWindow range
          filteredData = filteredData.filter(function (o) {
            if (o.time <= maxX && o.time >= minX) {
              if (!timeSet.has(o.time)) {
                timeSet.add(o.time);
                timeArr.push(o.time);
              }
            }

            return o.time <= maxX && o.time >= minX;
          });
        }
      }

      return [filteredData, timeArr];
    } // unix time in ms

  }, {
    key: "getDaysBetweenDates",
    value: function getDaysBetweenDates(d0, d1) {
      var msPerDay = 8.64e7; // Copy dates so don't mess them up

      var x0 = new Date(d0);
      var x1 = new Date(d1); // Set to noon - avoid DST errors

      x0.setHours(12, 0, 0);
      x1.setHours(12, 0, 0); // Round to remove daylight saving errors

      return Math.round((x1 - x0) / msPerDay);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dtWindow = _this$props.dtWindow,
          width = _this$props.width,
          height = _this$props.height,
          yRange = _this$props.yRange,
          data = _this$props.data,
          label = _this$props.label,
          colorString = _this$props.colorString,
          areaChartBackgroundColor = _this$props.areaChartBackgroundColor;
      var plotWidth = width - LEFT_WIDTH - RIGHT_WIDTH;
      var plotHeight = height - TOP_HEIGHT - BOTTOM_HEIGHT;
      var minXInMSecs = 0,
          maxXInMSecs = 0;

      if (dtWindow) {
        minXInMSecs = dtWindow[0];
        maxXInMSecs = dtWindow[1];
      }

      var styles = {
        leftPanelGradShadow: {
          position: "absolute",
          top: 0,
          left: LEFT_WIDTH - 52,
          height: height,
          width: 70,
          opacity: 1,
          backgroundImage: "linear-gradient(to right, black, rgba(255,255,255,0))"
        },
        mainPlotWrapDiv: {
          zIndex: -1,
          backgroundColor: areaChartBackgroundColor
        } // data = this.filterDataToDtWindow(data)

      };
      return _react.default.createElement(_PlotContainers.PlotContainer, {
        width: width,
        height: height,
        leftWidth: LEFT_WIDTH,
        plotWidth: plotWidth,
        rightWidth: RIGHT_WIDTH,
        topHeight: TOP_HEIGHT,
        plotHeight: plotHeight,
        bottomHeight: BOTTOM_HEIGHT
      }, _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null, _react.default.createElement("div", {
        style: styles.leftPanelGradShadow
      }), _react.default.createElement(_AreaChartLeftPanel.default, {
        label: label,
        colorString: colorString,
        panelWidth: LEFT_WIDTH,
        panelHeight: height
      }), _react.default.createElement(_AreaChartYAxis.default, {
        canvasH: height,
        canvasW: LEFT_WIDTH,
        yRange: yRange
      })), _react.default.createElement("div", {
        style: styles.mainPlotWrapDiv
      }, _react.default.createElement(_PlotContainers.PlotSubContainer, null, _react.default.createElement(_DateVerticalGridLines.default, {
        width: plotWidth,
        height: plotHeight,
        minX: minXInMSecs,
        maxX: maxXInMSecs
      }), _react.default.createElement(_AreaChart.default, {
        data: data,
        yRange: yRange,
        width: plotWidth,
        height: plotHeight,
        dtWindow: dtWindow
      }))), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null), _react.default.createElement(_PlotContainers.PlotSubContainer, null));
    }
  }]);

  return AreaChartBundle;
}(_react.PureComponent);

AreaChartBundle.propTypes = {
  data: _propTypes.default.array.isRequired,
  dtWindow: _propTypes.default.array.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  yRange: _propTypes.default.array.isRequired,
  label: _propTypes.default.string.isRequired,
  colorString: _propTypes.default.string.isRequired,
  areaChartBackgroundColor: _propTypes.default.string.isRequired
};
var _default = AreaChartBundle;
exports.default = _default;