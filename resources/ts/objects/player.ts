/// <reference path="../core/gameObject.ts"/>
/// <reference path="../game.ts"/>
class Player extends GameObject {

    private keyOptions: any;
    private ground: Ground;

    constructor(ground: Ground, x: number, y: number) {
        super(x, y, false);

        this.ground = ground;
        this.ground.appendChild(this);

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
    private handleKeyPress(event: KeyboardEvent): void {
        if (String(event.code) in this.keyOptions) {
            this.keyOptions[String(event.code)]();
        }
    }

    /**
     * Method to create key options with matching methods
     */
    private setupKeyOptions(): void {
        this.keyOptions = {
            "ArrowUp": () => this.climb("up"),
            "ArrowDown": () => this.climb("down"),
            "ArrowLeft": () => this.run("left"),
            "ArrowRight": () => this.run("right"),
            "KeyW": () => this.climb("up"),
            "KeyS": () => this.climb("down"),
            "KeyA": () => this.run("left"),
            "KeyD": () => this.run("right")
        }
    }

    /**
     * Method to make player run
     *
     * @param {String} direction
     */
    private run(direction: string): void {
        this.className = "";
        let mirror = '';
        this.classList.add('run');

        if (direction == "right") {
            if(this.getBoundingClientRect().right <= document.body.getBoundingClientRect().right){
                this.x += 10;
            }else{
                this.x -= 1;
            }
        } else {
            mirror = 'scaleX(-1)';
            if(this.getBoundingClientRect().left >= document.body.getBoundingClientRect().left){

                this.x -= 10;
            }else{
                this.x += 1;
            }
        }

        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) " + mirror;
    }


    /**
     * Method to make player climb
     *
     * @param {string} direction
     */
    private climb(direction: string): void {
        this.className = "";
        this.classList.add('run');

        if (direction == "up") {
            if (this.getBoundingClientRect().bottom - 50 >= this.ground.getBoundingClientRect().top) {
                this.y -= 10;
            } else {
                this.y += 1;
            }
        } else {
            if (this.getBoundingClientRect().bottom - 50 <= this.ground.getBoundingClientRect().bottom - 100) {

                this.y += 10;
            } else {
                this.y -= 1;
            }
        }


        // Move player vertical
        this.move();
    }


}

customElements.define('player-object', Player);

