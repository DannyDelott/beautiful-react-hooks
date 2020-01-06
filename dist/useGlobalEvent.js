"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useCallbackRef3 = _interopRequireDefault(require("./useCallbackRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useGlobalEvent = function useGlobalEvent(eventName) {
  var _useCallbackRef = (0, _useCallbackRef3["default"])(),
      _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
      callbackRef = _useCallbackRef2[0],
      setCallbackRef = _useCallbackRef2[1];

  (0, _react.useEffect)(function () {
    var cb = function cb() {
      return callbackRef.current.apply(callbackRef, arguments);
    };

    if (callbackRef.current && eventName) {
      window.addEventListener(eventName, cb);
    }

    return function () {
      if (eventName) {
        window.removeEventListener(eventName, cb);
      }
    };
  }, [eventName]);
  return setCallbackRef;
};

var _default = useGlobalEvent;
exports["default"] = _default;
//# sourceMappingURL=useGlobalEvent.js.map