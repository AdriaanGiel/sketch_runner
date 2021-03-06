/// <reference path="../core/dropItem.ts"/>

class Coin extends DropItem{

    constructor(scene:PlayScene,cloud:Cloud)
    {
        super(scene,-1,1,'./img/touch-coin.png',cloud);
        this.sound.src = './audio/coin.mp3';
    }

    public hit()
    {
        super.hit();
        this.scene.addPointsToScore(10);
    }


}

customElements.define('coin-object', Coin);