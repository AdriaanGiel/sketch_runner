/// <reference path="../core/dropItem.ts"/>

class Flame extends DropItem{

    constructor(scene:PlayScene,cloud:Cloud)
    {
        super(scene,-1,1,'./img/hit.png',cloud);
        this.sound.src = './audio/flame.mp3';
    }

    public hit()
    {
        super.hit();
        setTimeout(() => {
            this.scene.switchScene('endScene');
        },200);

    }
}

customElements.define('flame-object', Flame);