"use strict";
class Game {
    constructor() {
        this.scenes = {
            startScene: StartScene,
            playScene: PlayScene,
            endScene: EndScene
        };
        this.activeScene = new this.scenes.startScene(this);
        this.gameLoop();
    }
    gameLoop() {
        this.activeScene.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    getAvailableScenes() {
        return this.scenes;
    }
    changeGameScene(scene) {
        this.activeScene.resetScreen();
        this.activeScene = new this.scenes[scene](this);
    }
}
window.addEventListener('load', () => { new Game(); });
