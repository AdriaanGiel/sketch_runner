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
var Drop = (function (_super) {
    __extends(Drop, _super);
    function Drop(x, y, cloud) {
        var _this = _super.call(this, x, y, false) || this;
        _this.speedX = 0;
        _this.speedY = 0;
        _this.speedX = -1;
        _this.speedY = 1;
        _this.cloud = cloud;
        _this.cloud.appendChild(_this);
        return _this;
    }
    Drop.prototype.hit = function () {
        var _this = this;
        this.style.backgroundImage = "url('./img/touch-coin.png')";
        this.speedY = 0;
        this.style.left = "20px";
        this.style.top = "20px";
        this.speedX = -3;
        setTimeout(function () {
            _this.remove();
        }, 500);
    };
    Drop.prototype.move = function () {
        this.y += this.speedY;
        this.x += this.speedX;
        _super.prototype.move.call(this);
    };
    return Drop;
}(GameObject));
customElements.define('drop-object', Drop);
