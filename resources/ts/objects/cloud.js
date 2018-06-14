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
var Cloud = (function (_super) {
    __extends(Cloud, _super);
    function Cloud(x, y, scene) {
        var _this = _super.call(this, x, y) || this;
        _this.clouds = [
            'big-cloud-1',
            'big-cloud-2',
            'big-cloud-3',
            'small-cloud'
        ];
        _this.speedX = 3;
        _this.speedMultiplier = 1;
        _this.loops = 0;
        var cloudName = _this.clouds[Math.floor(Math.random() * _this.clouds.length)];
        _this.scene = scene;
        if (cloudName == 'small-cloud') {
            _this.style.width = "50px";
            _this.style.height = "50px";
        }
        _this.classList.add('flex');
        _this.classList.add('flex-center');
        _this.style.backgroundImage = "url('./img/" + cloudName + ".png')";
        return _this;
    }
    Cloud.prototype.raiseCloudSpeed = function (amount) {
        if (this.speedX < 8) {
            this.speedX += Game.random(0, amount);
        }
    };
    Cloud.prototype.update = function () {
        this.x += this.speedX;
        this.move();
        if (this.x > window.innerWidth / 2 + 150) {
            this.x = -1000;
            this.rain();
            this.raiseCloudSpeed(1 * this.speedMultiplier);
            this.loops++;
        }
        this.raiseSpeedMultiplier();
    };
    Cloud.prototype.raiseSpeedMultiplier = function () {
        if (this.loops === 2) {
            this.speedMultiplier++;
            this.loops = 0;
        }
    };
    Cloud.prototype.rain = function () {
        var rainDrop = new Drop(0, 0, this);
        this.scene.addDropToWorld(rainDrop);
    };
    return Cloud;
}(GameObject));
customElements.define('cloud-object', Cloud);
