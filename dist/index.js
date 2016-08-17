"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tcombForm = require("tcomb-form");

var _tcombForm2 = _interopRequireDefault(_tcombForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "src",

  onSubmit: function onSubmit(evt) {
    evt.preventDefault();
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  },

  onChange: function onChange(evt) {
    if (this.props.readOnly) {
      this.forceUpdate();
    }
  },

  render: function render() {
    var button = null;
    if (!this.props.readOnly) {

      button = _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
          "button",
          { type: "submit", className: "btn btn-primary" },
          "Save"
        ),
        this.props.allowDelete ? _react2.default.createElement(
          "button",
          { onClick: this.onDelete, className: "btn" },
          "Delete"
        ) : null
      );
    }

    return _react2.default.createElement(
      "form",
      { onSubmit: this.props.onSubmit || this.onSubmit },
      _react2.default.createElement(_tcombForm2.default.form.Form, { ref: "form", value: this.props.value, type: this.props.clazz.getSchema() }),
      button
    );
  }
});