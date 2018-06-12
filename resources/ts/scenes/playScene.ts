/// <reference path="../core/scene.ts"/>
class PlayScene extends Scene{
    player: Player;
    ground: Ground;

    constructor(game: Game) {
        super(game);
        // change background image
        document.body.style.backgroundImage = "url('./img/background.jpg')";

        // add ground to scene
        this.ground = new Ground(this.game, 0, 400);

        // add pipe to scene
        new Pipe(this.game, 250, this.ground.getElementPosition().top - 300);

        // add player to scene
        this.player = new Player(this.game, this.ground, this.ground.getElementPosition().left - 200, this.ground.getElementPosition().top - 300);

        // add some clouds to scene
        for (let i = 0; i < 5; i++) {
            new Cloud(this.game, 0, 0);
        }
    }

    update(): void {
        // run player update method
        this.player.update();

        // run ground update method
        this.ground.update();
    }
}