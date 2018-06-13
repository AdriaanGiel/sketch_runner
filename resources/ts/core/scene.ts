abstract class Scene{

    game:Game;

    constructor(game:Game)
    {
        this.game = game;
    }

    // Has to be used in every scene
    public abstract update():void

    /**
     * Method to reset te scene
     *
     */
    public resetScreen():void
    {
        document.body.innerHTML = "";
    }

    /**
     * Method to change to other scene
     *
     * @param {string} scene
     */
    protected switchScene(scene:string):void
    {
        // use the method in the game object
        this.game.changeGameScene(scene);
    }

    public checkCollision(a: ClientRect, b: ClientRect)
    {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }


}