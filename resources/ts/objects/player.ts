/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Player extends GameObject{

    private keyOptions:object;
    private ground:Ground;

    constructor(game:Game,ground:Ground,x:number,y:number)
    {
        super(game,x,y);

        this.ground = ground;

        this.setupKeyOptions();
        window.addEventListener('keydown', (e: KeyboardEvent) => this.handleKeyPress(e))


    }

    private handleKeyPress(event:KeyboardEvent):void
    {
        if(String(event.code) in this.keyOptions){
            this.keyOptions[String(event.code)]();
        }
    }

    private setupKeyOptions()
    {
        this.keyOptions = {
            "ArrowUp": () => this.jump("up"),
            "ArrowDown": () => this.jump("down"),
            "ArrowLeft": () => this.run("left"),
            "ArrowRight": () => this.run("right"),
            "KeyW": () => this.jump("up"),
            "KeyS": () => this.jump("down"),
            "KeyA": () => this.run("left"),
            "KeyD": () => this.run("right")
        }
    }

    public update()
    {

    }

    private run(direction:String)
    {
        this.className = "";
        this.classList.add('run');
        if(direction == "right"){
            this.x += 10;
        }else{
            this.style.transform = "scaleX(-1)";
            this.x -= 10;
        }


        this.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    private jump(direction:string)
    {
        this.className = "";
        this.classList.add('run');

        console.log("Player:",this.getBoundingClientRect().bottom);
        console.log("Ground:",this.ground.getBoundingClientRect().top);

        if(direction == "up"){
            this.y -= 10;
        }else{
            this.y += 10;
        }
        // this.style.transform = "translate("+this.x+"px, "+this.y+"px)";
        this.move();
    }



}

customElements.define('player-object', Player);

