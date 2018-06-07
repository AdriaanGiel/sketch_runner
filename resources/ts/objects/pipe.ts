/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Pipe extends GameObject{

    constructor(game:Game,x:number,y:number)
    {
        super(game,x,y);
    }

}

customElements.define('pipe-object', Pipe);