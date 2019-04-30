"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _PlotContainers = require("./PlotContainers/PlotContainers");

var _AreaChartLeftPanel = require("./AreaChartLeftPanel");

var _AreaChartLeftPanel2 = _interopRequireDefault(_AreaChartLeftPanel);

var _AreaChart = require("./AreaChart");

var _AreaChart2 = _interopRequireDefault(_AreaChart);

var _AreaChartYAxis = require("./AreaChartYAxis");

var _AreaChartYAxis2 = _interopRequireDefault(_AreaChartYAxis);

var _DateVerticalGridLines = require("./DateVerticalGridLines");

var _DateVerticalGridLines2 = _interopRequireDefault(_DateVerticalGridLines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import "./TempChartLeftPanel.css"


var minY = 0;
var maxY = 200;
var LEFT_WIDTH = 200;
var RIGHT_WIDTH = 0;
var TOP_HEIGHT = 0;
var BOTTOM_HEIGHT = 0;

var AreaChartBundle = function (_PureComponent) {
    _inherits(AreaChartBundle, _PureComponent);

    function AreaChartBundle() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AreaChartBundle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AreaChartBundle.__proto__ || Object.getPrototypeOf(AreaChartBundle)).call.apply(_ref, [this].concat(args))), _this), _this.getDaysBetweenDates = function (d0, d1) {
            var msPerDay = 8.64e7;

            // Copy dates so don't mess them up
            var x0 = new Date(d0);
            var x1 = new Date(d1);

            // Set to noon - avoid DST errors
            x0.setHours(12, 0, 0);
            x1.setHours(12, 0, 0);

            // Round to remove daylight saving errors
            return Math.round((x1 - x0) / msPerDay);
        }, _temp), _possibleConstructorReturn(_this, _ret);
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
        }

        // unix time in ms

    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                dtWindow = _props.dtWindow,
                width = _props.width,
                height = _props.height,
                data = _props.data;

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
                    zIndex: -1
                }
                // data = this.filterDataToDtWindow(data)

            };return _react2.default.createElement(
                _PlotContainers.PlotContainer,
                { width: width, height: height,
                    leftWidth: LEFT_WIDTH, plotWidth: plotWidth, rightWidth: RIGHT_WIDTH,
                    topHeight: TOP_HEIGHT, plotHeight: plotHeight, bottomHeight: BOTTOM_HEIGHT },
                _react2.default.createElement(_PlotContainers.PlotSubContainer, null),
                _react2.default.createElement(_PlotContainers.PlotSubContainer, null),
                _react2.default.createElement(_PlotContainers.PlotSubContainer, null),
                _react2.default.createElement(
                    _PlotContainers.PlotSubContainer,
                    null,
                    _react2.default.createElement("div", { style: styles.leftPanelGradShadow }),
                    _react2.default.createElement(_AreaChartLeftPanel2.default, { panelWidth: 200, panelHeight: 50 }),
                    _react2.default.createElement(_AreaChartYAxis2.default, { canvasH: 50, canvasW: LEFT_WIDTH })
                ),
                _react2.default.createElement(
                    "div",
                    { style: styles.mainPlotWrapDiv },
                    _react2.default.createElement(
                        _PlotContainers.PlotSubContainer,
                        null,
                        _react2.default.createElement(_DateVerticalGridLines2.default, { width: plotWidth, height: plotHeight, minX: minXInMSecs, maxX: maxXInMSecs }),
                        _react2.default.createElement(_AreaChart2.default, { data: data, width: plotWidth, height: plotHeight, dtWindow: dtWindow })
                    )
                ),
                _react2.default.createElement(_PlotContainers.PlotSubContainer, null),
                _react2.default.createElement(_PlotContainers.PlotSubContainer, null),
                _react2.default.createElement(_PlotContainers.PlotSubContainer, null),
                _react2.default.createElement(_PlotContainers.PlotSubContainer, null)
            );
        }
    }]);

    return AreaChartBundle;
}(_react.PureComponent);

exports.default = AreaChartBundle;