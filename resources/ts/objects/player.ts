/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Player extends GameObject{

    private keyOptions:any;
    private ground:Ground;

    constructor(ground:Ground,x:number,y:number)
    {
        super(x,y);

        this.ground = ground;

        this.move();

        // Fill keyOptions variable
        this.setupKeyOptions();

        // Add event listener to window to catch key presses
        window.addEventListener('keydown', (e: KeyboardEvent) => this.handleKeyPress(e))
    }

    /**
     *
     *
     * @param {KeyboardEvent} event
     */
    private handleKeyPress(event:KeyboardEvent):void
    {
        if(String(event.code) in this.keyOptions){
            this.keyOptions[String(event.code)]();
        }
    }

    /**
     * Method to create key options with matching methods
     */
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

    /**
     * Method to make player run
     *
     * @param {String} direction
     */
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


    /**
     * Method to make player jump
     *
     * @param {string} direction
     */
    private jump(direction:string)
    {
        this.className = "";
        this.classList.add('run');

        if(direction == "up"){
            this.y -= 10;
        }else{
            this.y += 10;
        }

        // Move player vertical
        this.move();
    }



}

customElements.define('player-object', Player);

