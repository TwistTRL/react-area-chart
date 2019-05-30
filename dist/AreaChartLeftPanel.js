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

// import "./TempChartLeftPanel.css"
var AreaChartLeftPanel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AreaChartLeftPanel, _PureComponent);

  function AreaChartLeftPanel(props) {
    var _this;

    _classCallCheck(this, AreaChartLeftPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AreaChartLeftPanel).call(this, props));
    _this.canvasW = _this.props.canvasW;
    _this.canvasH = _this.props.canvasH;
    return _this;
  }

  _createClass(AreaChartLeftPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          panelHeight = _this$props.panelHeight,
          panelWidth = _this$props.panelWidth,
          label = _this$props.label,
          colorString = _this$props.colorString;
      var styles = {
        leftPanel: {
          height: panelHeight + "px",
          width: panelWidth + "px",
          backgroundColor: colorString
        },
        areaChartLabel: {
          marginLeft: "20px",
          lineHeight: panelHeight + "px",
          color: '#373c62',
          fontWeight: '800',
          fontFamily: 'MuseoSans, Sans'
        }
      };
      return _react.default.createElement("div", {
        className: "area-chart-left-panel",
        style: styles.leftPanel
      }, _react.default.createElement("div", {
        className: "area-chart-label",
        style: styles.areaChartLabel
      }, " ", label, " "));
    }
  }]);

  return AreaChartLeftPanel;
}(_react.PureComponent);

var _default = AreaChartLeftPanel;
exports.default = _default;