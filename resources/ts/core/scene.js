"use strict";
var Scene = (function () {
    function Scene(game) {
        this.game = game;
    }
    Scene.prototype.resetScreen = function () {
        document.body.innerHTML = "";
    };
    Scene.prototype.switchScene = function (scene) {
        this.game.changeGameScene(scene);
    };
    Scene.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Scene;
}());
