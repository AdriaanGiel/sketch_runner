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

        // Move the game object to the correct position
        this.move();

        // Append the element to the body
        document.body.appendChild(this);

        // Set startvalues
        this.position = this.getBoundingClientRect();
    }

    /**
     * Method to get start position
     *
      * @returns {ClientRect}
     */
    public getElementPosition()
    {
        return this.position;
    }

    /**
     *  Method to move element to position on screen
     */
    public move()
    {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}