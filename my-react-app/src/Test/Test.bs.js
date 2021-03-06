'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Test(Props) {
  var label = Props.label;
  var onSubmit = Props.onSubmit;
  var match = React.useState(function () {
        return false;
      });
  var setEditing = match[1];
  var match$1 = React.useState(function () {
        return label;
      });
  var onChange = match$1[1];
  var value = match$1[0];
  var onCancel = function (_evt) {
    return Curry._1(setEditing, (function (param) {
                  return false;
                }));
  };
  var onFocus = function ($$event) {
    return $$event.target.select();
  };
  React.useEffect((function () {
          Curry._1(onChange, (function (param) {
                  return label;
                }));
          
        }), [label]);
  if (match[0]) {
    return React.createElement("form", {
                onBlur: onCancel,
                onSubmit: (function (param) {
                    Curry._1(setEditing, (function (param) {
                            return false;
                          }));
                    return Curry._1(onSubmit, value);
                  })
              }, React.createElement("input", {
                    value: value,
                    onFocus: onFocus,
                    onBlur: onCancel,
                    onChange: (function ($$event) {
                        var value = $$event.target.value;
                        return Curry._1(onChange, (function (param) {
                                      return value;
                                    }));
                      })
                  }));
  } else {
    return React.createElement("span", {
                onDoubleClick: (function (_evt) {
                    return Curry._1(setEditing, (function (param) {
                                  return true;
                                }));
                  })
              }, value);
  }
}

var make = Test;

exports.make = make;
/* react Not a pure module */
