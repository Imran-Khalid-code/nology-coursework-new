"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var motherShip = function motherShip(size, name) {
  _classCallCheck(this, motherShip);

  this.size = size;
  this.name = name;
  this.points = 100;
};

var defenceShip =
/*#__PURE__*/
function (_motherShip) {
  _inherits(defenceShip, _motherShip);

  function defenceShip(size, name) {
    var _this;

    _classCallCheck(this, defenceShip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(defenceShip).call(this, size, name));
    _this.points = 80;
    return _this;
  }

  return defenceShip;
}(motherShip);

var attackShip =
/*#__PURE__*/
function (_motherShip2) {
  _inherits(attackShip, _motherShip2);

  function attackShip(size, name) {
    var _this2;

    _classCallCheck(this, attackShip);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(attackShip).call(this, size, name));
    _this2.points = 45;
    return _this2;
  }

  return attackShip;
}(motherShip); //random function for hit
// const randomHit = () => {};
//function to restart game if mothership === 0
//function if ships hit zero cannot be hit again


document.querySelector(".attack").addEventListener("click", function () {
  shipHit();
}); //////////////

function shipHit() {
  input.forEach(function (hit) {
    if (!Object.points(motherShip).includes(hit)) {
      isValid = false;
    } else if (Object.points(motherShip).includes(hit)) {
      isValid = true;
    }
  });

  if (isValid == true) {
    reduce(this.points - 9);
  } else if (isValid == false) {
    this.point = this.points;
  }
}

var input = [];
var isValid = "";