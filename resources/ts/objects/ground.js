"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.move();
        return _this;
    }
    return Ground;
}(GameObject));
customElements.define('ground-object', Ground);
