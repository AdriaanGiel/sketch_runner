/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Ground extends GameObject{

    constructor(game:Game,x:number,y:number)
    {
        super(game,x,y);

        this.move();
    }

}

customElements.define('ground-object', Ground);