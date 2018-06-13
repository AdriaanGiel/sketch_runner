/// <reference path="../core/scene.ts"/>
class PlayScene extends Scene{
    private player: Player;
    private ground: Ground;
    private drops:Drop[] = [];
    private clouds:Cloud[] = [];
    private gotHit:boolean = false;


    constructor(game: Game) {
        super(game);
        // change background image
        document.body.style.backgroundImage = "url('./img/background.jpg')";

        // add ground to scene
        this.ground = new Ground(this.game, 0, 400);

        // add pipe to scene
        // new Pipe(this.game, 250, this.ground.getElementPosition().top - 300);

        // add player to scene
        this.player = new Player(this.game, this.ground, this.ground.getBoundingClientRect().left - 200, this.ground.getBoundingClientRect().top - 300);

        // add some clouds to scene
        for (let i = 0; i < 20; i++) {
            let cloud = new Cloud(this.game, Math.floor(Math.random() * -window.outerWidth), Math.floor(Math.random() * -300) + -100, this);
            cloud.rain();
            this.clouds.push(cloud);

        }
    }

    update(): void {
        // run player update method
        this.player.update();


        for(let cloud of this.clouds){
            cloud.update();
        }

        for(let drop of this.drops){
            drop.move();
        }

        // Check collision between drop and player
        this.checkIfPlayerHasBeenHit();

    }

    private makeItRain():void
    {
        this.clouds[Math.floor(Math.random() * this.clouds.length)].rain();

    }

    private checkIfPlayerHasBeenHit():void
    {
        for(let drop of this.drops)
        {
            if(this.checkCollision(drop.getBoundingClientRect(),this.player.getBoundingClientRect())){
                // console.log('hit');
            }
        }
    }


    /**
     * Method to add a new drop to scene
     */
    public addDropToWorld(drop:Drop)
    {
        this.drops.push(drop);
    }


}