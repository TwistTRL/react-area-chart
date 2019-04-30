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

// import "./TempChartLeftPanel.css"

var AreaChartLeftPanel = function (_PureComponent) {
    _inherits(AreaChartLeftPanel, _PureComponent);

    function AreaChartLeftPanel(props) {
        _classCallCheck(this, AreaChartLeftPanel);

        var _this = _possibleConstructorReturn(this, (AreaChartLeftPanel.__proto__ || Object.getPrototypeOf(AreaChartLeftPanel)).call(this, props));

        _this.canvasW = _this.props.canvasW;
        _this.canvasH = _this.props.canvasH;
        return _this;
    }

    _createClass(AreaChartLeftPanel, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // this.meterCanvas = this.refs.meterCanvas
            // this.meterCtx = this.meterCanvas.getContext("2d")
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                panelHeight = _props.panelHeight,
                panelWidth = _props.panelWidth;


            var styles = {
                leftPanel: {
                    height: panelHeight + "px",
                    width: panelWidth + "px",
                    backgroundColor: "#fffcec"
                },
                cpbLabel: {
                    position: "absolute",
                    top: "25%",
                    left: "10%",
                    color: '#373c62',
                    fontWeight: '800'
                }
            };

            return _react2.default.createElement(
                "div",
                { className: "cpb-left-panel",
                    style: styles.leftPanel },
                _react2.default.createElement(
                    "div",
                    { className: "cpb-label",
                        style: styles.cpbLabel },
                    " CPB "
                )
            );
        }
    }]);

    return AreaChartLeftPanel;
}(_react.PureComponent);

exports.default = AreaChartLeftPanel;