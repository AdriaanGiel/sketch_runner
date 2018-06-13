/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>

class Cat extends GameObject{

    constructor(game:Game,x:number,y:number)
    {
        super(game,x,y);
    }

}

customElements.define('cat-object', Cat);