/// <reference path="../core/scene.ts"/>
class PlayScene extends Scene{
    player: Player;
    ground: Ground;

    constructor(game: Game) {
        super(game);
        document.body.style.backgroundImage = "url('./img/background.jpg')";
        this.ground = new Ground(this.game, 0, 400);
        new Pipe(this.game, 250, this.ground.getElementPosition().top - 300);
        this.player = new Player(this.game, this.ground, this.ground.getElementPosition().left - 200, this.ground.getElementPosition().top - 300);

        for (let i = 0; i < 5; i++) {
            new Cloud(this.game, 0, 0);
        }
    }

    update(): void {
        this.player.update();
        this.ground.update();
    }
}