/// <reference path="../core/scene.ts"/>
class PlayScene extends Scene {
    private player: Player;
    private ground: Ground;
    private drops: Drop[] = [];
    private clouds: Cloud[] = [];


    constructor(game: Game) {
        super(game);
        // change background image
        document.body.style.backgroundImage = "url('./img/background.jpg')";

        // add ground to scene
        this.ground = new Ground( 0, 400);

        // add player to scene
        this.player = new Player( this.ground, this.ground.getBoundingClientRect().left - 200, this.ground.getBoundingClientRect().top - 300);

        // add some clouds to scene
        for (let i = 0; i < 20; i++) {
            let cloud = new Cloud( Math.floor(Math.random() * -window.outerWidth), Math.floor(Math.random() * -300) + -100, this);
            cloud.rain();
            this.clouds.push(cloud);
        }

    }

    /**
     * Scene update method
     */
    update(): void {
        // run player update method
        this.player.update();

        // Loop to move clouds
        for (let cloud of this.clouds) {
            cloud.update();
        }

        // Loop to move drop-items
        for (let drop of this.drops) {
            // move drop-item
            drop.move();

            // Check collision between drop and player
            this.checkIfPlayerHasBeenHit(drop);
        }

    }

    /**
     * Method to check if a player has been hit by a drop
     * @param {Drop} drop
     */
    private checkIfPlayerHasBeenHit(drop:Drop): void
    {
        if (this.checkCollision(drop.getBoundingClientRect(), this.player.getBoundingClientRect())) {
            drop.hit();
        }

    }


    /**
     * Method to add a new drop to scene
     */
    public addDropToWorld(drop: Drop) {
        this.drops.push(drop);
    }


}