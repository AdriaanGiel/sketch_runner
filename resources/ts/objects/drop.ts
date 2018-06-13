/// <reference path="../core/gameObject.ts"/>

class Drop extends GameObject{
    private speedX : number = 0;
    private speedY : number = 0;
    private cloud : Cloud;

    constructor(game:Game,x:number,y:number,cloud:Cloud)
    {
        super(game,x,y,false);

        this.speedX = -1;
        this.speedY = 1;

        this.cloud = cloud;

        this.cloud.appendChild(this);

        // this.move();
    }

    public hit()
    {
        this.style.backgroundImage = "url('./img/touch-coin.png')";
        this.speedY = 0;
        this.style.left = "20px";
        this.style.top = "20px";

        this.speedX = -3;

        setTimeout(()=>{
            this.remove();
        }, 500);

    }

    public move():void
    {
        this.y += this.speedY;
        this.x += this.speedX;

        super.move()
    }
}

customElements.define('drop-object', Drop);