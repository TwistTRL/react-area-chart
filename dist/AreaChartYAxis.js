"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var AreaChartYAxis =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AreaChartYAxis, _PureComponent);

  function AreaChartYAxis(props) {
    var _this;

    _classCallCheck(this, AreaChartYAxis);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AreaChartYAxis).call(this, props));
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
    key: "toDomYCoord_Linear",
    value: function toDomYCoord_Linear(height, minY, maxY, dataY) {
      return height - (dataY - minY) / ((maxY - minY) / height);
    }
  }, {
    key: "drawYAxis",
    value: function drawYAxis(ctx) {
      var yRange = this.props.yRange; // clear canvas

      ctx.canvas.width = ctx.canvas.width; // draw the y-axis line

      ctx.lineWidth = 3;
      ctx.moveTo(this.canvasW, 5);
      ctx.lineTo(this.canvasW, this.canvasH - 5);
      ctx.stroke(); // label styling

      ctx.font = "600 14px MuseoSans, Sans";
      ctx.textBaseline = "middle";
      ctx.fillStyle = '#373c62';
      var minMaxDiff = yRange[1] - yRange[0];
      var xOffset = 25; // draw the label

      var posDomY = this.toDomYCoord_Linear(this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, yRange[0]);
      ctx.fillText(yRange[0], this.canvasW - xOffset, posDomY);
      posDomY = this.toDomYCoord_Linear(this.canvasH, yRange[0] - minMaxDiff * 0.3, yRange[1] + minMaxDiff * 0.4, yRange[1]);
      ctx.fillText(yRange[1], this.canvasW - xOffset, posDomY);
      ctx.stroke();
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        canvas: {
          position: "absolute"
        }
      };
      return _react.default.createElement("canvas", {
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

var _default = AreaChartYAxis;
exports.default = _default;