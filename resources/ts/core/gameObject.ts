/// <reference path="../game.ts"/>
abstract class GameObject extends HTMLElement{
    protected game:Game;
    protected x:number;
    protected y:number;
    protected  position:ClientRect;

    protected constructor(game:Game,x:number,y:number)
    {
        super();
        this.game = game;
        this.x = x;
        this.y = y;

        this.move();
        document.body.appendChild(this);

        this.position = this.getBoundingClientRect();
    }

    public getElementPosition()
    {
        return this.position;
    }

    public move()
    {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}