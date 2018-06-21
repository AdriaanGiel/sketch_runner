/// <reference path="../core/dropItem.ts"/>

class Flame extends DropItem{

    constructor(scene:PlayScene,cloud:Cloud)
    {
        super(scene,-1,1,'./img/touch-coin.png',cloud);
        this.sound.src = './audio/flame.mp3';
    }

    public hit()
    {
        super.hit();
        this.cloud.stopRain();
        this.scene.switchScene('endScene');
    }
}

customElements.define('flame-object', Flame);