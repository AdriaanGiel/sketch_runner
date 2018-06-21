/// <reference path="../game.ts"/>
abstract class GameObject extends HTMLElement{
    protected x:number = 0;
    protected y:number = 0;


    protected constructor(x:number,y:number, append:boolean = true)
    {
        super();
        this.x = x;
        this.y = y;

        if(append)
        {
            // Append the element to the body
            document.body.appendChild(this);
        }

    }


    /**
     *  Method to move element to position on screen
     */
    public move():void
    {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}