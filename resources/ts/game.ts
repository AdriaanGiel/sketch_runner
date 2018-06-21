/// <reference path="./core/scene.ts"/>
/// <reference path="./scenes/startScene.ts"/>
class Game {
    private activeScene:Scene;

    private scenes:any = {
        startScene: StartScene,
        playScene: PlayScene,
        endScene: EndScene
    };

    public score:Score;


    constructor()
    {
        // Set startScore
        this.score = new Score(0);


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

    public changeGameScene(scene:string):void
    {
        // reset innetHTML on page
        this.activeScene.resetScreen();

        // set new scene
        this.activeScene = new this.scenes[scene](this);
    }

    /**
     * Method to get random value between a min and max
     * Static so it can be used everywhere without the need of a initialized game object
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    static random(min:number,max:number):number
    {
        return Math.floor(Math.random() * max) + min;
    }

    public checkIfElementHasGoneOutOfBounds(el:GameObject):boolean {
        let rect = el.getBoundingClientRect();
        return (
            ( rect.top > window.innerHeight)
        );
    };
}

// Setup game when page is loaded
window.addEventListener('load', () => { new Game() });