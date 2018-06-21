/// <reference path="../core/dropItem.ts"/>
class Spike extends DropItem{

    constructor(scene:PlayScene,cloud:Cloud)
    {
        super(scene,2,1,'./img/touch-coin.png',cloud);
        this.sound.src = './audio/laser.mp3'
    }

    public hit()
    {
        super.hit();
        this.scene.switchScene('endScene');
    }


}

customElements.define('spike-object', Spike);