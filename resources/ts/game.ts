/// <reference path="./core/scene.ts"/>
/// <reference path="./scenes/startScene.ts"/>
class Game {
    private activeScene:Scene;
    private scenes:any = {
        startScene: StartScene,
        playScene: PlayScene,
        endScene: EndScene
    };

    constructor()
    {
        // Set active screen
        this.activeScene = new this.scenes.startScene(this);

        // Run game loop
        this.gameLoop();
    }

    private gameLoop():void{

        // run screen update method
        this.activeScene.update();

        // animation frame to create loop
        requestAnimationFrame(() => this.gameLoop());
    }

    /**
     * Method to get available scenes
     *
     * @returns {any}
     */
    public getAvailableScenes():any
    {
        return this.scenes;
    }

    public changeGameScene(scene:String):void
    {
        // reset innetHTML on page
        this.activeScene.resetScreen();

        // set new scene
        this.activeScene = new this.scenes[scene](this);
    }

}

// Setup game when page is loaded
window.addEventListener('load', () => { new Game() });