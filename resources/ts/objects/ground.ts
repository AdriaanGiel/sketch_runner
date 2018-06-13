/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Ground extends GameObject{

    constructor(x:number,y:number)
    {
        super(x,y);

        this.move();
    }

}

customElements.define('ground-object', Ground);