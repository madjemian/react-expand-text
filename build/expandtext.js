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

var ExpandText = function (_React$Component) {
    _inherits(ExpandText, _React$Component);

    function ExpandText(props) {
        _classCallCheck(this, ExpandText);

        var _this = _possibleConstructorReturn(this, (ExpandText.__proto__ || Object.getPrototypeOf(ExpandText)).call(this, props));

        _this.state = {
            showFull: false
        };
        return _this;
    }

    _createClass(ExpandText, [{
        key: "render",
        value: function render() {
            var visibleText = null;
            if (this.state.showFull || this.props.text.length <= this.props.maxLength) {
                visibleText = this.props.text;
            } else {
                var firstHalf = this.props.text.substring(0, this.props.maxLength / 2);
                var secondHalf = this.props.text.substring(this.props.text.length - this.props.maxLength / 2, this.props.text.length);
                visibleText = firstHalf + "..." + secondHalf;
            }
            var self = this;
            var clickHandler = function clickHandler() {
                self.setState({ showFull: !self.state.showFull });
            };
            return _react2.default.createElement(
                "span",
                { onClick: clickHandler, className: this.props.className },
                visibleText
            );
        }
    }]);

    return ExpandText;
}(_react2.default.Component);

ExpandText.propTypes = {
    text: _react2.default.PropTypes.string.isRequired,
    maxLength: _react2.default.PropTypes.number.isRequired,
    className: _react2.default.PropTypes.string
};

ExpandText.defaultProps = {
    className: ""
};

exports.default = ExpandText;