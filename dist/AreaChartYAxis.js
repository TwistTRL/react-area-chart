"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaChartYAxis = function (_PureComponent) {
    _inherits(AreaChartYAxis, _PureComponent);

    function AreaChartYAxis(props) {
        _classCallCheck(this, AreaChartYAxis);

        var _this = _possibleConstructorReturn(this, (AreaChartYAxis.__proto__ || Object.getPrototypeOf(AreaChartYAxis)).call(this, props));

        _this.toDomYCoord_Linear = function (height, minY, maxY, dataY) {
            return height - (dataY - minY) / ((maxY - minY) / height);
        };

        _this.drawYAxis = function (ctx) {
            var yRange = _this.props.yRange;
            // clear canvas
            ctx.canvas.width = ctx.canvas.width;

            // draw the y-axis line
            ctx.lineWidth = 3;
            ctx.moveTo(_this.canvasW, 5);
            ctx.lineTo(_this.canvasW, _this.canvasH - 5);
            ctx.stroke();

            // label styling
            ctx.font = "600 14px MuseoSans, Sans";
            ctx.textBaseline = "middle";
            ctx.fillStyle = '#373c62';

            var minMaxDiff = yRange[1] - yRange[0];
            var xOffset = 25;

            // draw the label
            var posDomY = _this.toDomYCoord_Linear(_this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, yRange[0]);
            if (yRange[0] < 100) {
                xOffset = 25;
            }
            if (yRange[0] < 10) {
                xOffset = 15;
            }

            ctx.fillText(yRange[0], _this.canvasW - xOffset, posDomY);
            posDomY = _this.toDomYCoord_Linear(_this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, yRange[1]);
            if (yRange[1] < 100) {
                xOffset = 25;
            }
            if (yRange[1] < 10) {
                xOffset = 15;
            }
            ctx.fillText(yRange[1], _this.canvasW - xOffset, posDomY);
            ctx.stroke();
        };

        _this.canvasW = _this.props.canvasW;
        _this.canvasH = _this.props.canvasH;
        _this.minY = _this.props.minY;
        _this.maxY = _this.props.maxY;
        return _this;
    }

    _createClass(AreaChartYAxis, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.areaChartYAxisCanvas = this.refs.areaChartYAxisCanvas;
            this.areaChartYAxisCtx = this.areaChartYAxisCanvas.getContext("2d");
            this.drawYAxis(this.areaChartYAxisCtx);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.minY = this.props.minY;
            this.maxY = this.props.maxY;
            this.drawYAxis(this.areaChartYAxisCtx);
        }
    }, {
        key: "render",
        value: function render() {
            var styles = {
                canvas: {
                    position: "absolute"
                }
            };

            return _react2.default.createElement("canvas", {
                className: "area-chart-y-axis",
                ref: "areaChartYAxisCanvas",
                style: styles.canvas,
                width: this.canvasW,
                height: this.canvasH
            });
        }
    }]);

    return AreaChartYAxis;
}(_react.PureComponent);

exports.default = AreaChartYAxis;