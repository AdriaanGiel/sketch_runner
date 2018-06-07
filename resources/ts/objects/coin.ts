/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Coin extends GameObject{

    constructor(game:Game,x:number,y:number)
    {
        super(game,x,y);
    }

}

customElements.define('coin-object', Coin);