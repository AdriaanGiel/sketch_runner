/// <reference path="./gameObject.ts"/>
class DropItem extends GameObject{
    protected speedX:number;
    protected speedY:number;
    protected scene:PlayScene;
    protected sound:any = {
        src: '',
        loop: false
    };
    private hitImage:string;
    protected cloud:Cloud;

    constructor(scene:PlayScene,speedX:number,speedY:number,hitImage:string,cloud:Cloud)
    {
        super(0,0,false);

        this.scene = scene;
        this.speedX = -1;
        this.speedY = speedY;
        this.hitImage = hitImage;
        this.cloud = cloud;

        document.body.appendChild(this);

        this.x = this.cloud.getBoundingClientRect().left;
        this.y = this.cloud.getBoundingClientRect().top;
        this.move();
    }

    public hit():void
    {
        this.stop();
        this.makeSound();
        this.changeImageAndRemoveItem();
    }

    private makeSound():void
    {
        let sound = new Howl({
            src: this.sound.src,
            loop: this.sound.loop,
            volume: 0.1
        });
        sound.play();
    }

    private changeImageAndRemoveItem():void
    {
        this.style.backgroundImage =  "url('"+ this.hitImage + "')";
        setTimeout(() => {
            this.scene.removeDropFromWorld(this);
            this.remove();
        },500);
    }

    private stop():void
    {
        this.speedY = 0;
    }

    public move():void
    {
        this.y += this.speedY;
        super.move();
    }

}