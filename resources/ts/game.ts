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
        this.activeScene = new this.scenes.startScene(this);

        this.gameLoop();
    }

    private gameLoop():void{

        this.activeScene.update();

        requestAnimationFrame(() => this.gameLoop());
    }

    public getAvailableScenes()
    {
        return this.scenes;
    }

    public changeGameScene(scene:String):void
    {
        this.activeScene.resetScreen();

        this.activeScene = new this.scenes[scene](this);
    }


}

window.addEventListener('load', () => { new Game() });