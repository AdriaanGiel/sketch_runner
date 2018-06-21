/// <reference path="../core/scene.ts"/>
class PlayScene extends Scene {
    private player: Player;
    private ground: Ground;
    private dropItems: DropItem[] = [];
    private clouds: Cloud[] = [];
    private scoreObject:Score;


    constructor(game: Game) {
        super(game);
        // change background image
        document.body.style.backgroundImage = "url('./img/background.jpg')";
        document.body.className = '';

        // add ground to scene
        this.ground = new Ground( 0, 400);

        this.scoreObject = new Score();

        // add player to scene
        this.player = new Player( this.ground, 0, 0);

        // add some clouds to scene
        for (let i = 0; i < 12; i++) {
            let cloud = new Cloud( Math.floor(Math.random() * -window.outerWidth), Math.floor(Math.random() * 100) , this);
            cloud.rain();
            this.clouds.push(cloud);
        }
    }

    /**
     * Scene update method
     */
    public update(): void {

        this.scoreObject.update(this.game.score);

        // Loop to move clouds
        for (let cloud of this.clouds) {
            cloud.update();
        }

        // Loop to move drop-items
        for (let dropItem of this.dropItems) {
            // move drop-item
            dropItem.move();
            // Check collision between drop and player
            this.checkIfPlayerHasBeenHit(dropItem);
            
            // if (this.game.checkIfElementHasGoneOutOfBounds(dropItem)){
            //     console.log('yeah')
            // }
        }

    }

    public addPointsToScore(amount:number)
    {
        this.game.score += amount;
    }


    /**
     * Method to check if a player has been hit by a drop
     * @param {DropItem} dropItem
     */
    private checkIfPlayerHasBeenHit(dropItem:DropItem): void
    {
        if (this.checkCollision(dropItem.getBoundingClientRect(), this.player.getBoundingClientRect())) {
            dropItem.hit();
        }

    }


    /**
     * Method to add a new drop to scene
     */
    public addDropToWorld(dropItem: DropItem) {
        this.dropItems.push(dropItem);
    }

    /**
     * Method to remove dropItem from scene
     * @param {DropItem} dropItem
     */
    public removeDropFromWorld(dropItem:DropItem)
    {
        for(let i = 0; i < this.dropItems.length; i++)
        {
            if(Object.is(dropItem,this.dropItems[i]))
            {
                console.log('destroy');
            }else{
                console.log('not a match');
            }
        }
    }

}