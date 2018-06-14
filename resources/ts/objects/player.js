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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(ground, x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.ground = ground;
        _this.move();
        _this.setupKeyOptions();
        window.addEventListener('keydown', function (e) { return _this.handleKeyPress(e); });
        return _this;
    }
    Player.prototype.handleKeyPress = function (event) {
        if (String(event.code) in this.keyOptions) {
            this.keyOptions[String(event.code)]();
        }
    };
    Player.prototype.setupKeyOptions = function () {
        var _this = this;
        this.keyOptions = {
            "ArrowUp": function () { return _this.jump("up"); },
            "ArrowDown": function () { return _this.jump("down"); },
            "ArrowLeft": function () { return _this.run("left"); },
            "ArrowRight": function () { return _this.run("right"); },
            "KeyW": function () { return _this.jump("up"); },
            "KeyS": function () { return _this.jump("down"); },
            "KeyA": function () { return _this.run("left"); },
            "KeyD": function () { return _this.run("right"); }
        };
    };
    Player.prototype.update = function () {
    };
    Player.prototype.run = function (direction) {
        this.className = "";
        this.classList.add('run');
        if (direction == "right") {
            this.x += 10;
        }
        else {
            this.style.transform = "scaleX(-1)";
            this.x -= 10;
        }
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Player.prototype.jump = function (direction) {
        this.className = "";
        this.classList.add('run');
        if (direction == "up") {
            this.y -= 10;
        }
        else {
            this.y += 10;
        }
        this.move();
    };
    return Player;
}(GameObject));
customElements.define('player-object', Player);
