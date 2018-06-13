/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Drop extends GameObject{
    private xSpeed:number;
    protected ySpeed:number;

    constructor(game:Game,x:number,y:number)
    {
        super(game,x,y);

        this.xSpeed = -1;
        this.ySpeed = 1;


        console.log('xValue', this.x);
        // console.log('yValue', this.y);
    }

    public move():void
    {
        // this.x += this.xSpeed;
        this.y += 1;


        console.log('speed', this.y);
        // call parent move function
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)";

    }
}

customElements.define('drop-object', Drop);