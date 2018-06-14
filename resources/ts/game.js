"use strict";
var Game = (function () {
    function Game() {
        this.scenes = {
            startScene: StartScene,
            playScene: PlayScene,
            endScene: EndScene
        };
        this.activeScene = new this.scenes.startScene(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.activeScene.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.getAvailableScenes = function () {
        return this.scenes;
    };
    Game.prototype.changeGameScene = function (scene) {
        this.activeScene.resetScreen();
        this.activeScene = new this.scenes[scene](this);
    };
    Game.random = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    };
    return Game;
}());
window.addEventListener('load', function () { new Game(); });
