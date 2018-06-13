/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Coin extends GameObject{

    constructor(x:number,y:number)
    {
        super(x,y);
    }

}

customElements.define('coin-object', Coin);