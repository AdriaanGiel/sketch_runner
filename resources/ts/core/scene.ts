abstract class Scene{

    game:Game;

    constructor(game:Game)
    {
        this.game = game;
    }

    // Has to be used in every scene
    public abstract update():void


    public resetScreen():void
    {
        document.body.innerHTML = "";
    }

    protected switchScene(scene:string):void
    {
        this.game.changeGameScene(scene);
    }

}