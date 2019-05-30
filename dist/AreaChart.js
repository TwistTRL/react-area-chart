"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PlottingUtils = require("./PlottingUtils");

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

var AreaChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AreaChart, _PureComponent);

  function AreaChart(props) {
    var _this;

    _classCallCheck(this, AreaChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AreaChart).call(this, props));
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
    key: "drawCPBChart",
    value: function drawCPBChart(ctx) {
      var _this2 = this;

      // let { minX, maxX, minY, maxY, data } = this.props
      ctx.canvas.width = ctx.canvas.width;
      var domX;
      var minX = this.props.dtWindow[0] / 1000;
      var maxX = this.props.dtWindow[1] / 1000;
      var height = this.canvasH;
      var data = this.props.data;
      var yRange = this.props.yRange; // first plot the stroke

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(128,128,128,0.7)";
      var minMaxDiff = yRange[1] - yRange[0];
      data.forEach(function (d) {
        domX = (0, _PlottingUtils.toDomXCoord_Linear)(_this2.canvasW, minX, maxX, d["time"]);
        var domY = (0, _PlottingUtils.toDomYCoord_Linear)(_this2.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, d["value"]);
        ctx.lineTo(domX, domY);
      });
      ctx.stroke(); // now define the bottom of the filled area

      var maxY = height; //Math.max.apply(null, pts.map(pt=>pt.y));
      // draw the missing parts

      domX = (0, _PlottingUtils.toDomXCoord_Linear)(this.canvasW, minX, maxX, data[data.length - 1]["time"]);
      ctx.lineTo(domX, maxY); // bottom-right

      domX = (0, _PlottingUtils.toDomXCoord_Linear)(this.canvasW, minX, maxX, data[0]["time"]);
      ctx.lineTo(domX, maxY); // bottom-left

      ctx.fillStyle = "rgba(192,192,192,0.4)";
      ctx.fill(); // will close the path for us
    }
  }, {
    key: "render",
    value: function render() {
      // let minXInSecs = minX / 1000, maxXInSecs = maxX / 1000
      return _react.default.createElement("canvas", {
        className: "area-chart-canvas",
        ref: "areaChartCanvas",
        width: this.canvasW,
        height: this.canvasH
      });
    }
  }]);

  return AreaChart;
}(_react.PureComponent);

var _default = AreaChart;
exports.default = _default;