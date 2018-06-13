/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Spike extends GameObject{

    constructor(x:number,y:number)
    {
        super(x,y);
    }



}

customElements.define('spike-object', Spike);