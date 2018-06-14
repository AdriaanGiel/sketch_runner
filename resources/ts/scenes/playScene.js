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
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene(game) {
        var _this = _super.call(this, game) || this;
        _this.drops = [];
        _this.clouds = [];
        document.body.style.backgroundImage = "url('./img/background.jpg')";
        _this.ground = new Ground(0, 400);
        _this.player = new Player(_this.ground, _this.ground.getBoundingClientRect().left - 200, _this.ground.getBoundingClientRect().top - 300);
        for (var i = 0; i < 20; i++) {
            var cloud = new Cloud(Math.floor(Math.random() * -window.outerWidth), Math.floor(Math.random() * -300) + -100, _this);
            cloud.rain();
            _this.clouds.push(cloud);
        }
        return _this;
    }
    PlayScene.prototype.update = function () {
        this.player.update();
        for (var _i = 0, _a = this.clouds; _i < _a.length; _i++) {
            var cloud = _a[_i];
            cloud.update();
        }
        for (var _b = 0, _c = this.drops; _b < _c.length; _b++) {
            var drop = _c[_b];
            drop.move();
            this.checkIfPlayerHasBeenHit(drop);
        }
    };
    PlayScene.prototype.checkIfPlayerHasBeenHit = function (drop) {
        if (this.checkCollision(drop.getBoundingClientRect(), this.player.getBoundingClientRect())) {
            drop.hit();
        }
    };
    PlayScene.prototype.addDropToWorld = function (drop) {
        this.drops.push(drop);
    };
    return PlayScene;
}(Scene));
