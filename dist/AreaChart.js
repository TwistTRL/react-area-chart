"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _PlottingUtils = require("./PlottingUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import "./TempChart.css"


var AreaChart = function (_PureComponent) {
    _inherits(AreaChart, _PureComponent);

    function AreaChart(props) {
        _classCallCheck(this, AreaChart);

        var _this = _possibleConstructorReturn(this, (AreaChart.__proto__ || Object.getPrototypeOf(AreaChart)).call(this, props));

        _this.drawCPBChart = function (ctx) {
            // let { minX, maxX, minY, maxY, data } = this.props
            ctx.canvas.width = ctx.canvas.width;
            var domX = void 0;
            var minX = _this.props.dtWindow[0] / 1000;
            var maxX = _this.props.dtWindow[1] / 1000;
            var height = _this.canvasH;
            var data = _this.props.data;
            var yRange = _this.props.yRange;

            // first plot the stroke
            ctx.lineWidth = 4;
            ctx.strokeStyle = "rgba(128,128,128,0.7)";
            var minMaxDiff = yRange[1] - yRange[0];
            data.forEach(function (d) {
                domX = (0, _PlottingUtils.toDomXCoord_Linear)(_this.canvasW, minX, maxX, d["time"]);
                var domY = (0, _PlottingUtils.toDomYCoord_Linear)(_this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, d["value"]);
                ctx.lineTo(domX, domY);
            });
            ctx.stroke();
            // now define the bottom of the filled area
            var maxY = height; //Math.max.apply(null, pts.map(pt=>pt.y));
            // draw the missing parts
            domX = (0, _PlottingUtils.toDomXCoord_Linear)(_this.canvasW, minX, maxX, data[data.length - 1]["time"]);
            ctx.lineTo(domX, maxY); // bottom-right
            domX = (0, _PlottingUtils.toDomXCoord_Linear)(_this.canvasW, minX, maxX, data[0]["time"]);
            ctx.lineTo(domX, maxY); // bottom-left
            ctx.fillStyle = "rgba(192,192,192,0.4)";
            ctx.fill(); // will close the path for us
        };

        _this.canvasW = _this.props.width;
        _this.canvasH = _this.props.height;
        return _this;
    }

    _createClass(AreaChart, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.areaChartCanvas = this.refs.areaChartCanvas;
            this.areaChartCtx = this.areaChartCanvas.getContext("2d");
            this.drawCPBChart(this.areaChartCtx);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.drawCPBChart(this.areaChartCtx);
        }
    }, {
        key: "render",
        value: function render() {
            // let minXInSecs = minX / 1000, maxXInSecs = maxX / 1000
            return _react2.default.createElement("canvas", {
                className: "area-chart-canvas",
                ref: "areaChartCanvas",
                width: this.canvasW,
                height: this.canvasH
            });
        }
    }]);

    return AreaChart;
}(_react.PureComponent);

exports.default = AreaChart;