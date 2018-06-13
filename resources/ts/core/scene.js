"use strict";
class Scene {
    constructor(game) {
        this.game = game;
    }
    resetScreen() {
        document.body.innerHTML = "";
    }
    switchScene(scene) {
        this.game.changeGameScene(scene);
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
