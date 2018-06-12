/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Ground extends GameObject{

    constructor(game:Game,x:number,y:number)
    {
        super(game,x,y);
    }


    public update()
    {
        // Every frame add 3 to the x value
        this.x -= 3;

        // if(this.getBoundingClientRect().left - this.getBoundingClientRect().width < window.innerWidth * -1){
        //     console.log("asda");
        //     this.x = this.getBoundingClientRect().width * 1;
        // }

        // Move ground
        this.move()
    }

}

customElements.define('ground-object', Ground);