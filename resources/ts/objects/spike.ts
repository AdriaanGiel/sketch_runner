/// <reference path="../core/dropItem.ts"/>
class Spike extends DropItem{

    constructor(scene:PlayScene,cloud:Cloud)
    {
        super(scene,2,1,'./img/impact.png',cloud);
        this.sound.src = './audio/laser.mp3'
    }

    public hit()
    {
        super.hit();

        setTimeout(() => {
            this.scene.switchScene('endScene');
        },200);
    }


}

customElements.define('spike-object', Spike);